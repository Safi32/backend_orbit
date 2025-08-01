/**
 * Copyright 2023, the hatemragab project author.
 * All rights reserved. Use of this source code is governed by a
 * MIT license that can be found in the LICENSE file.
 */

import {Module} from '@nestjs/common';
import {MailEmitterService} from './mail.emitter.service';
import {MailerModule} from "@nestjs-modules/mailer";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {HandlebarsAdapter} from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import {join} from 'path';
import {MailEvent} from "./mail.event";
import {AppConfigService} from "../app_config/app_config.service";
import {AppConfigModule} from "../app_config/app_config.module";
import root from "app-root-path";

@Module({
    providers: [MailEmitterService, MailEvent],
    imports: [
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => {
                return ({
                    transport: {
                        host: config.getOrThrow("EMAIL_HOST"),
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: config.getOrThrow("EMAIL_USER"),
                            pass: config.getOrThrow("EMAIL_PASSWORD")
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    },
                    defaults: {
                        from: `\"No Reply\" <${config.getOrThrow("EMAIL_USER")}>`
                    },
                    template: {
                        dir: join(root.path, "src", "api", "mail", "templates"),
                        adapter: new HandlebarsAdapter(),
                        options: {
                            strict: true
                        }
                    }
                });
            },

        }),
        AppConfigModule
    ],
    exports: [MailEmitterService],
})
export class MailEmitterModule {
}
