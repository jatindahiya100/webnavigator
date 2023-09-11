const express = require('express');
const dns = require('dns');
const net = require('net');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const disposableDomains = [
    "example.com", "example.net" // Add more domains as needed
];

app.use(cors());
app.use(bodyParser.json());

function isValidEmail(email) {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    return emailRegex.test(email);
}

function isValidDomain(domain) {
    return new Promise((resolve, reject) => {
        dns.resolve(domain, 'MX', (err, addresses) => {
            if (err) {
                console.error(`Error resolving MX records for ${domain}: ${err.message}`);
                resolve(false);
            } else {
                resolve(addresses && addresses.length > 0);
            }
        });
    });
}

async function isDeliverableEmail(email) {
    const domain = email.split('@')[1];
    const portsToCheck = [465, 587, 25]; // Add more ports as needed

    for (const port of portsToCheck) {
        try {
            await new Promise((resolve, reject) => {
                const socket = net.createConnection(port, domain);
                socket.setTimeout(1000); // Add a timeout to prevent hanging

                socket.on('connect', () => {
                    socket.end();
                    resolve(true); // Successful connection, resolve with true
                });

                socket.on('error', (error) => {
                    console.error(`Error connecting to ${domain} on port ${port}: ${error.message}`);
                    resolve(false); // Connection failed, resolve with false
                });
            });

            // If we successfully connect on any port, consider the email deliverable
            return true;
        } catch (error) {
            // Handle any exceptions here if needed
            console.error(`Exception when checking port ${port}: ${error.message}`);
        }
    }

    // If we couldn't connect on any port, consider the email not deliverable
    return false;
}

function isDisposableEmail(email) {
    const domain = email.split('@')[1];
    return disposableDomains.includes(domain);
}

app.post('/verify_email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email address not provided' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ status: 'Invalid syntax' }); // Change status code to 400 for invalid syntax
    }

    const domain = email.split('@')[1];
    try {
        const domainValid = await isValidDomain(domain);

        if (!domainValid) {
            return res.status(400).json({ status: 'Invalid domain' }); // Change status code to 400 for invalid domain
        }

        const deliverable = await isDeliverableEmail(email);

        if (!deliverable) {
            return res.status(200).json({ status: 'Email is not deliverable' });
        }

        if (isDisposableEmail(email)) {
            return res.status(200).json({ status: 'Email is disposable' });
        }

        return res.status(200).json({ status: 'Email is valid' });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: 'Internal Server Error' }); // Change status code to 500 for internal server error
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
