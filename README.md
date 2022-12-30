# Photo Tools
This is a collection of scripts that I wrote to help me manage photos. 

# consolidateGooglePhotos
When [downloading](https://support.google.com/accounts/answer/3024190) your Google photos, they archive your media into multiple folders with some albums and dynamic collections spread across archives. This makes it super hard to consolidate collections/albums once downloaded. In other words, if you have an album called "Christmas 2022" that folder with some photos could be spread across multiple archives. If you want them all consolidated again, you know, for easy human consumption, you need to find the folder across the archives and move your images into one. 

This script does this for you. Simply define the `googlePhotosPath` and `targetDir` file paths in the script, making sure the `targetDir` is outside of the `googlePhotosPath`.

``` js
const googlePhotosPath = "/mnt/d/Photos/Google Photo Backups/";
const targetDir = "/mnt/d/Photos/Clean_Google_Photos/";
```

Once the script is run, any deep-level directories for albums/collections will live in `targetDir` with all images in the same named directory consolidated from across all archive directories.