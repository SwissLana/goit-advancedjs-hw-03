## Task. Image Search

Create an application to search for images by keyword and view them in a gallery. Add styling to the user interface elements according to the layout design.

### Search Form

Add the form markup to your HTML file. The form consists of an input field for entering the search keyword and a submit button.

```html
<form class="form">
  <label>
    <input type="text" name="search-text" placeholder="Search images..." required>
  </label>
  <button type="submit">Search</button>
</form>
```

- The user will enter a search string into the text field. 
- Upon form submission, perform an HTTP request using this search query.
- When the submit button is clicked, add a validation check to ensure the text field is not empty, preventing the user from sending a request if the input is blank.

### HTTP Requests

- Add the **Axios** library to your project to handle code related to HTTP requests.
- Use the public API service **Pixabay** for the backend. Register, get your unique access key, and read through the documentation.

You must specify the following query string parameters in your requests:
- `key` — Your unique API access key.
- `q` — The search keyword entered by the user.
- `image_type` — The type of image. You only need photos, so set this value to `photo`.
- `orientation` — The orientation of the photo. Set this value to `horizontal`.
- `safesearch` — Age filter. Set this value to `true`.

The backend response will be an object containing several properties. One of them (`hits`) will be an array of image objects that match your search criteria.

**Note:** You must isolate your HTTP request functions into a separate file named `pixabay-api.js` inside the `js` folder. This is a best practice and an excellent opportunity to practice a modular development approach.

If the backend returns an empty array, it means no matching images were found. In this case, display a message using the **iziToast** library with the following text: `"Sorry, there are no images matching your search query. Please try again!"`.

To properly include the library's CSS styles in your project, add an extra import alongside the one described in the documentation:

```javascript
// Described in the documentation
import iziToast from "izitoast";
// Additional styles import
import "izitoast/dist/css/iziToast.min.css";
```

### Gallery and Image Cards

The gallery container element (an unordered list for identical items: `<ul class="gallery">`) should already be present in your HTML document. Append the image card markup to this container after successful HTTP requests.

Each image is represented by an object. You only need to use the following properties from it:
- `webformatURL` — Link to the small image for the gallery card preview.
- `largeImageURL` — Link to the large image for the modal window.
- `tags` — A string describing the image. Suitable for the `alt` attribute.
- `likes` — Number of likes.
- `views` — Number of views.
- `comments` — Number of comments.
- `downloads` — Number of downloads.


Clear the contents of the gallery completely before performing a search for a new keyword to prevent mixing up the request results.

### SimpleLightbox Library

Add a feature to display the large version of an image using the **SimpleLightbox** library for a fully functional gallery.

To include the library's CSS styles in your project, add an extra import alongside the one described in the documentation:

```javascript
// Described in the documentation
import SimpleLightbox from "simplelightbox";
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
```

- In your HTML template logic, you must wrap each image card inside a link tag (`<a>`), as described in the "Markup" section of the documentation.
- The library includes a `refresh()` method that you **must** invoke every time new elements are appended to the gallery.

### Loading Indicator

Add a UI element to inform the user that images are currently being fetched from the backend. The loader must appear right before the HTTP request begins and disappear immediately after the request finishes.

Instead of plain text (as shown in the demo video), you can use a library with pre-styled loading animations, such as **css-loader**. A video guide on how to implement this library is available in the README.md of its repository.

### Code Organization

Organize your code using a modular approach with `export`/`import` syntax:

#### 1. `pixabay-api.js`
Isolate your functions for handling HTTP requests here:
- `getImagesByQuery(query)`: This function should accept a single parameter `query` (the search keyword string), perform the HTTP request, and return the `data` property from the received response object.

#### 2. `render-functions.js`
Create your `SimpleLightbox` instance for the modal window here, and isolate your UI rendering logic:
- `createGallery(images)`: This function should accept an array of `images`, generate the HTML markup for the gallery, inject it into the gallery container, and call the `refresh()` method on your `SimpleLightbox` instance. Returns nothing (`void`).
- `clearGallery()`: This function takes no arguments and clears the inner contents of the gallery container. Returns nothing (`void`).
- `showLoader()`: This function takes no arguments and adds a CSS class to display the loader element. Returns nothing (`void`).
- `hideLoader()`: This function takes no arguments and removes the CSS class to hide the loader element. Returns nothing (`void`).

#### 3. `main.js`
Write the main application logic in this file. This includes triggering `iziToast` notifications and validating the length of the array from the backend response. Import the required functions from `pixabay-api.js` and `render-functions.js` into this file and execute them at the appropriate stages of the lifecycle.

