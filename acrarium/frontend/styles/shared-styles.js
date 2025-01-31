/*
  ~ (C) Copyright 2018 Lukas Morawietz (https://github.com/F43nd1r)
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
 */
import {registerStyles, css} from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles("vaadin-login-form-wrapper",
    // language=css
    css`
        :host {
            background: none;    
        }
        
        [part="form"] {
            padding: 0;
        }

        [part="form-title"] {
            display: none;
        }
    `);

registerStyles("vaadin-select",
    // language=css
    css`
        [part="input-field"] {
            background-color: var(--select-background-color, var(--lumo-contrast-10pct));
        }
    `
    )

