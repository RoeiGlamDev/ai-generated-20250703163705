// Get the video list element
const videoList = document.getElementById('video-list');

// Sample video data
const videos = [
    {
        title: 'Video 1',
        description: 'This is a sample video',
        thumbnail: 'https://via.placeholder.com/150',
    },
    {
        title: 'Video 2',
        description: 'This is another sample video',
        thumbnail: 'https://via.placeholder.com/150',
    },
    {
        title: 'Video 3',
        description: 'This is yet another sample video',
        thumbnail: 'https://via.placeholder.com/150',
    },
];

// Function to create a video list item
function createVideoListItem(video) {
    const listItem = document.createElement('li');
    const thumbnail = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    thumbnail.src = video.thumbnail;
    thumbnail.alt = video.title;
    title.textContent = video.title;
    description.textContent = video.description;

    listItem.appendChild(thumbnail);
    listItem.appendChild(title);
    listItem.appendChild(description);

    return listItem;
}

// Populate the video list
videos.forEach((video) => {
    const listItem = createVideoListItem(video);
    videoList.appendChild(listItem);
});

// Add fade-in animation to the video list
videoList.classList.add('fade-in');

// Add event listener to the hero button
document.querySelector('.hero button').addEventListener('click', () => {
    // Add smooth transition to the hero section
    document.querySelector('.hero').classList.add('smooth-transition');
    // Scroll to the video list section
    document.querySelector('.videos').scrollIntoView({ behavior: 'smooth' });
});