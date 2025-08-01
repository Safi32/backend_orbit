/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */

import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';

export class DeleteFilesDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    fileIds: string[];
}
