/*
 * @Author: {zhengzhuang}
 * @Date: 2024-03-21 21:21:37
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-03-21 21:56:12
 * @Description:
 */
import * as React from 'react';
import { createElement } from 'react';
import { HotTable } from '@handsontable/react';

import 'handsontable/dist/handsontable.full.css';
import "handsontable/languages/zh-CN";
import './index.scss';

// 注册所有模块
import { registerAllModules } from 'handsontable/registry';
registerAllModules();

export interface PageProps {
  color?: string;
  style?: object;
}

const Page: React.FC<PageProps> = function Page({
  color,
  style = {},
  ...otherProps
}) {

  return (
    <HotTable
      data={[
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13]
      ]}
      rowHeaders={true}
      colHeaders={true}
      height="auto"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
  );
};

export default Page;
