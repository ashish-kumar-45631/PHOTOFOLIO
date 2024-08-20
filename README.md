# PhotoFolio - Online Photo Album App

## Description

PhotoFolio is a React-based online photo album application that enables users to seamlessly upload, organize, and share their digital photos. The project integrates Firebase Firestore for real-time database operations, ensuring efficient data management and synchronization.

## Features

### Album Management
- **Albums List:** Displays a list of photo albums, retrieved from the Firestore database.
- **Add Album:** Users can create new albums using a simple form with album name input.
- **Delete Album:** Allows users to delete albums from the Firestore database.

### Image Management
- **Images List:** Displays images inside a selected album, fetched from the Firestore database.
- **Add Image:** Users can add new images with a title and URL using a form.
- **Update Image:** Users can update existing images' title and URL, with the form prefilled with current data.
- **Delete Image:** Provides the ability to delete images from the album.
- **Hover Actions:** Edit and delete buttons appear when hovering over images.

### Carousel
- A carousel feature allows users to view images in a modal window with next, previous, and close buttons.

### Search
- A search input field to filter images within an album locally, enhancing user experience.

### Navigation
- A back button to easily navigate from the Images List to the Albums List.

### Conditional Rendering
- Displays loading states and absence of data using `react-spinner-material`.
- Forms for adding or updating albums/images appear only when triggered.

### Notifications
- Real-time toast notifications for actions such as adding, updating, deleting, or encountering errors using `react-toastify`.

## Technologies Used
- React.js
- Firebase Firestore
- React-Spinner-Material
- React-Toastify

## Note
- Ensure there is an album named “first” in the Firebase database for testing purposes.
- The home page should load all albums from Firebase upon the initial render.
