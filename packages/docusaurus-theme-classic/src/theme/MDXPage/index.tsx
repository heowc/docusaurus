/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/MDXPage';
import TOC from '@theme/TOC';
import {ThemeClassNames} from '@docusaurus/theme-common';

import styles from './styles.module.css';

export default function MDXPage(props: Props): JSX.Element {
  const {content: MDXPageContent} = props;
  const {
    metadata: {title, description, permalink, frontMatter},
  } = MDXPageContent;
  const {wrapperClassName, hide_table_of_contents: hideTableOfContents} =
    frontMatter;

  return (
    <Layout
      title={title}
      description={description}
      permalink={permalink}
      wrapperClassName={wrapperClassName ?? ThemeClassNames.wrapper.mdxPages}
      pageClassName={ThemeClassNames.page.mdxPage}>
      <main className="container container--fluid margin-vert--lg">
        <div className={clsx('row', styles.mdxPageWrapper)}>
          <div className={clsx('col', !hideTableOfContents && 'col--8')}>
            <MDXContent>
              <MDXPageContent />
            </MDXContent>
          </div>
          {!hideTableOfContents && MDXPageContent.toc && (
            <div className="col col--2">
              <TOC
                toc={MDXPageContent.toc}
                minHeadingLevel={frontMatter.toc_min_heading_level}
                maxHeadingLevel={frontMatter.toc_max_heading_level}
              />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
