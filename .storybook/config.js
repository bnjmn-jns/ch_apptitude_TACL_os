import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { setOptions } from '@storybook/addon-options';
import { darken, transparentize } from 'polished';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { IntlProvider } from 'react-intl';
import styled from 'styled-components';

import TaclThemeProvider from '../src/themeProvider';

export const storiesOptions = {
  showSource: false,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

addDecorator(Story => (
  <IntlProvider locale={'en'}>
    <TaclThemeProvider rtl={false}>
      <Grid>
        <Row>
          <Col xsOffset={2} xs={8}>
            <Story />
          </Col>
        </Row>
      </Grid>
    </TaclThemeProvider>
  </IntlProvider>
));

setOptions({
  name: 'TACL',
  url: 'http://apptitude.ch',
  sidebarAnimations: true,
});

setAddon(chaptersAddon);

function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('./stories.js');
}

configure(loadStories, module);
