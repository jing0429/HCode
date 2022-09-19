/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import {HtmlClassNameProvider} from '@docusaurus/theme-common';
 import {DocProvider} from '@docusaurus/theme-common/internal';
 import DocItemMetadata from '@theme/DocItem/Metadata';
 import DocItemLayout from '@theme/DocItem/Layout';
 import type {Props} from '@theme/DocItem';
 import Giscus from '@giscus/react';

 export default function DocItem(props: Props): JSX.Element {
   const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
   const MDXComponent = props.content;
   return (
     <DocProvider content={props.content}>
       <HtmlClassNameProvider className={docHtmlClassName}>
         <DocItemMetadata />
         <DocItemLayout>
           <MDXComponent />
           <Giscus
            id="comments"
            repo="jing0429/HCode"
            repoId="R_kgDOIAz7Fg"
            category="Announcements"
            categoryId="DIC_kwDOIAz7Fs4CRetD"
            mapping="pathname"
            reactionsEnabled="1"
            inputPosition="top"
            theme="dark"
            lang="zh-TW"
            loading="lazy"
          />
         </DocItemLayout>
       </HtmlClassNameProvider>
     </DocProvider>
   );
 }
 