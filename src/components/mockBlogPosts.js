import TheWebNavigatorsThumbnail from '../assets/images/blogs/the-web-navigators.jpg';

const mockBlogPosts = [
    {
        id: 1,
        featuredImage: TheWebNavigatorsThumbnail,
        heading: 'Introducing The Web Navigators: Your Partners in Web Design, Development, and Marketing',
        shortDescription: 'Discover how The Web Navigators can guide your business to success...',
        mainContent: (
            <div>
                <p>Lorem ipsum dolor sit amet...</p>
                <h3>Subheading</h3>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
                {/* Additional content */}
            </div>
        ),
    },
    // Add more blog posts as needed
];

export default mockBlogPosts;
