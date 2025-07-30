/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */

///dont touch this file !

const whitelistImages = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/bmp",
    "image/x-png",
    "image/webp",
    "image/tiff",
    "image/apng"
];
const usersMaxNameSize = 50
const usersMaxPasswordSize = 255
const usersMimePasswordSize = 6

// App version constant - update this when you update package.json version
export const APP_VERSION = "1.0.1";

export {
    whitelistImages,
    usersMaxNameSize,
    usersMaxPasswordSize,
    usersMimePasswordSize,
}