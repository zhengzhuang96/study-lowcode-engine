/*
 * @Author: {zhengzhuang}
 * @Date: 2024-03-21 21:21:37
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2024-03-21 22:45:27
 * @Description: 
 */
import * as React from 'react';
import { createElement } from 'react';
import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";
import "@univerjs/sheets-numfmt/lib/index.css";

import { LocaleType, LogLevel, Univer } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { DEFAULT_WORKBOOK_DATA_DEMO } from "./constants";

import './index.scss';

export interface PageProps {
  color?: string;
  style?: object;
}

const Page: React.FC<PageProps> = function Page({
  color,
  style = {},
  ...otherProps
}) {
  // univer
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.ZH_CN,
    logLevel: LogLevel.VERBOSE,
  });

  // core plugins
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: "index",
    header: true,
    toolbar: true,
    footer: true,
  });
  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);

  // sheet feature plugins

  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);

  // create univer sheet instance
  univer.createUniverSheet(DEFAULT_WORKBOOK_DATA_DEMO);

  return (
    <div id="index" style={{ height: '100vh' }} />
  );
};

export default Page;
