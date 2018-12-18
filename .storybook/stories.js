import React from 'react';

import { storiesOf, action } from '@storybook/react';
import { storiesOptions as options } from './config';
import { Form } from 'react-form';
import moment from 'moment';

import Text from '../src/components/Text';
import Button from '../src/components/Button';
import {
  PrimaryButton,
  SecondaryButton,
  PositiveButton,
  IconButton,
  IconButtonWithText,
  ConfirmButton,
} from '../src/components/Button/variants';
import TextLink from '../src/components/TextLink/';
import Icon from '../src/components/Icon';
import StatusIcon from '../src/components/Icon/StatusIcon';
import Switch from '../src/form/inputs/Switch';
import TextInput from '../src/form/inputs/TextInput';
import NumberInput from '../src/form/inputs/NumberInput';
import TextArea from '../src/form/inputs/TextArea';
import Select from '../src/form/inputs/Select';
import Tag from '../src/form/inputs/TagInput/Tag';
import TagInput from '../src/form/inputs/TagInput';
import RadioInputGroup from '../src/form/inputs/RadioGroup';
import CheckboxGroup from '../src/form/inputs/CheckboxGroup';
import Tooltip from '../src/components/Tooltip';
import Popover from '../src/components/Popover';
import Notification from '../src/components/Notification';
import Message from '../src/components/Message';
import Alert from '../src/components/Alert';
import Dropdown from '../src/components/Dropdown';
import StatusDropdown from '../src/components/Dropdown/StatusDropdown';
import Slider, { Range } from '../src/form/inputs/Slider';
import Search from '../src/components/SearchInput';
import Loader, { Spinner } from '../src/components/Loader';
import StatusIndicatorIcon from '../src/components/StatusIndicator/StatusIndicatorIcon';
import NotificationCounterCircle from '../src/components/NotificationIndicator/CounterCircle';
import NotificationIndicator from '../src/components/NotificationIndicator';
import Pagination from '../src/components/Pagination';
import Steps from '../src/components/Steps';
import Progress, { CircleProgress } from '../src/components/Progress';
import Tabs from '../src/components/Tabs';
import DataTable from '../src/components/DataTable';
import { dataWithComplexContent, largeData, smallData, testColumns } from './assets/tableTestData';
import FileUpload from '../src/form/inputs/FileUpload';
import FilePreview, { FilePreviewItem } from '../src/form/inputs/FileUpload/FilePreview';
import FileManagerItem from '../src/form/inputs/FileUpload/FileManager';
import PhonenumberInput from '../src/form/inputs/PhoneNumberInput';
import Calendar from '../src/form/inputs/DatePicker';
import AddressSearch from '../src/form/inputs/AddressSearch';
import InputWrapper from '../src/form/inputs/InputWrapper';
import FormHelper from '../src/components/FormHelper';
import Field from '../src/form/Field';
import Toggle from '../src/form/inputs/Toggle';
import Keyword from '../src/components/Keyword';

import { Badge } from './decorators/badge';
import ReadMe from './decorators/renderReadme';

import { metrics, colors } from './assets/theme';

import { RenderCodeExample } from './decorators/codeBlock';
import { Spacer } from './decorators/styles';

import iconPaths from '../src/components/Icon/paths';
import { LoremIpsum } from './assets/data';
import TaclThemeProvider from '../src/themeProvider';

import './globalStyles';

Text.displayName = 'Text';
Button.displayName = 'Button';
PrimaryButton.displayName = 'PrimaryButton';
SecondaryButton.displayName = 'SecondaryButton';
PositiveButton.displayName = 'PositiveButton';
IconButton.displayName = 'IconButton';
IconButtonWithText.displayName = 'IconButtonWithText';
ConfirmButton.displayName = 'ConfirmButton';
Icon.displayName = 'Icon';
Number.displayName = 'Number';
TextLink.displayName = 'TextLink';
TextInput.displayName = 'TextInput';
NumberInput.displayName = 'NumberInput';
TextArea.displayName = 'TextArea';
Select.displayName = 'Select';
Tag.displayName = 'Tag';
TagInput.displayName = 'TagInput';
RadioInputGroup.displayName = 'RadioInputGroup';
CheckboxGroup.displayName = 'CheckboxGroup';
Tooltip.displayName = 'Tooltip';
Popover.displayName = 'Popover';
Notification.displayName = 'Notification';
Message.displayName = 'Message';
Alert.displayName = 'Alert';
Dropdown.displayName = 'Dropdown';
StatusDropdown.displayName = 'StatusDropdown';
Slider.displayName = 'Slider';
Range.displayName = 'Range';
Search.displayName = 'Search';
Pagination.displayName = 'Pagination';
Steps.displayName = 'Steps';
Progress.displayName = 'Progress';
Tabs.displayName = 'Tabs';
DataTable.displayName = 'DataTable';
FileUpload.displayName = 'FileUpload';
FilePreview.displayName = 'FilePreview';
PhonenumberInput.displayName = 'PhonenumberInput';
Calendar.displayName = 'Calendar';
InputWrapper.displayName = 'InputWrapper';
Field.displayName = 'Field';
Loader.displayName = 'Loader';
Spinner.displayName = 'Spinner';
FormHelper.displayName = 'FormHelper';
FileManagerItem.displayName = 'FileManagerItem';
AddressSearch.displayName = 'AddressSearch';
Toggle.displayName = 'Toggle';
Keyword.displayName = 'Keyword';

storiesOf('Welcome', module).add('Readme', () => <ReadMe />);
storiesOf('UI', module)
  .addWithChapters('Text', {
    chapters: [
      {
        sections: [
          {
            title: 'Text tags',
            sectionFn: () => {
              return (
                <span>
                  <Text tag="h1" size={metrics.title} message="Title" block />
                  <Text tag="h2" size={metrics.subTitle} message="subTitle" block />
                  <Text tag="h3" size={metrics.large} message="large" block />
                  <Text tag="p" size={metrics.medium} message="medium" block />
                  <Text tag="span" size={metrics.small} message="small" block />
                  <RenderCodeExample component={<Text tag="h1" size={metrics.title} message="Title" block />} />
                  <RenderCodeExample
                    component={
                      <Text tag="h1" size={metrics.title} block>
                        /* Text can be passed as a child component */
                      </Text>
                    }
                  />
                </span>
              );
            },
            options,
          },
          {
            title: 'Status text',
            sectionFn: () => (
              <span>
                <Badge
                  type="warning"
                  title="Deprecated feature"
                  message="The 'type' prop has been deprecated in favour of the 'hasStatus' prop and will be removed in V1"
                />
                <Text
                  tag="p"
                  size={metrics.medium}
                  message="Warning Text : Grumpy wizards make toxic brew for the evil Queen and Jack."
                  hasStatus={{ type: 'error' }}
                />
                <Text
                  tag="p"
                  size={metrics.medium}
                  message="Warning Text : Grumpy wizards make toxic brew for the evil Queen and Jack."
                  hasStatus={{ type: 'warning' }}
                />
                <Text
                  tag="p"
                  size={metrics.medium}
                  message="Warning Text : Grumpy wizards make toxic brew for the evil Queen and Jack."
                  hasStatus={{ type: 'success' }}
                />
                <Text
                  tag="p"
                  size={metrics.medium}
                  message="Warning Text : Grumpy wizards make toxic brew for the evil Queen and Jack."
                  hasStatus={{ type: 'info' }}
                />
                <RenderCodeExample
                  component={<Text tag="h1" size={metrics.medium} hasStatus={{ type: 'error' }} type="error" block />}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Formatted Number',
            sectionFn: () => (
              <span>
                <Text number={{ style: 'decimal' }} message={5255211000} tag="h1" size={24} />
                <RenderCodeExample component={<Text number={{ style: 'decimal' }} message={5255211000} tag="h1" size={24} />} />
              </span>
            ),
            options,
          },
          {
            title: 'si Number',
            sectionFn: () => (
              <span>
                <Text message={1005} tag="p" siNumberDecimal={2} block />
                <Text message={12563000} tag="p" siNumberDecimal={1} block />
                <RenderCodeExample component={<Text message={1005} tag="p" siNumberDecimal={2} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Link',
            subtitle: 'href',
            sectionFn: () => (
              <span>
                <TextLink href="http://google.com" message="go to google.com" />
                <RenderCodeExample component={<TextLink href="http://google.com" message="go to google.com" />} />
              </span>
            ),
            options,
          },
          {
            title: 'Link',
            subtitle: 'LinkTo',
            sectionFn: () => (
              <span>
                <TextLink linkTo="/users/whatever" message="click me dammit" size={24} />
                <RenderCodeExample component={<TextLink linkTo="/users/whatever" message="click me dammit" />} />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addDecorator(story => <div style={{ fontFamily: 'Lato' }}>{story()}</div>)
  .addWithChapters('Buttons', {
    chapters: [
      {
        sections: [
          {
            title: 'Button',
            subtitle: 'Generic with declared styling props',
            sectionFn: () => (
              <span>
                <Button
                  onClick={action('/onClick')}
                  background={colors.secondary}
                  hoverBackground={colors.dodgerBlueDark}
                  message={'button'}
                />
                <RenderCodeExample>
                  <Button
                    onClick={action('/onClick')}
                    background={colors.secondary}
                    hoverBackground={colors.dodgerBlueDark}
                    message={'button'}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Primary',
            sectionFn: () => (
              <span>
                <PrimaryButton onClick={action('/onClick')} message={'register'} />
                <RenderCodeExample>
                  <PrimaryButton onClick={action('/onClick')} message={'register'} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'LinkTo',
            sectionFn: () => (
              <span>
                <Button
                  background={colors.secondary}
                  hoverBackground={colors.dodgerBlueDark}
                  onClick={action('/onClick')}
                  linkTo={'/login'}
                  message={'Sign in'}
                />
                <RenderCodeExample>
                  <Button
                    background={colors.secondary}
                    hoverBackground={colors.dodgerBlueDark}
                    onClick={action('/onClick')}
                    linkTo={'/login'}
                    message={'sign in'}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Hyperlink',
            sectionFn: () => (
              <span>
                <Button
                  background={colors.secondary}
                  hoverBackground={colors.dodgerBlueDark}
                  onClick={action('/onClick')}
                  href={'https://google.com'}
                  message={'google'}
                />
                <RenderCodeExample>
                  <Button
                    background={colors.secondary}
                    hoverBackground={colors.dodgerBlueDark}
                    onClick={action('/onClick')}
                    href={'https://google.com'}
                    message={'google'}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Primary - loading',
            sectionFn: () => (
              <span>
                <PrimaryButton onClick={action('onClick')} message={'register'} hasStatus={{ type: 'loading' }} />
                <RenderCodeExample>
                  <PrimaryButton onClick={action('onClick')} message={'register'} hasStatus={{ type: 'loading' }} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Primary - success',
            sectionFn: () => (
              <span>
                <PrimaryButton onClick={action('onClick')} message={'register'} hasStatus={{ type: 'success' }} />
                <RenderCodeExample>
                  <PrimaryButton onClick={action('onClick')} message={'register'} hasStatus={{ type: 'success' }} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Primary - error',
            sectionFn: () => (
              <span>
                <PrimaryButton onClick={action('/primaryClick')} message={'register'} hasStatus={{ type: 'error' }} />
                <RenderCodeExample>
                  <PrimaryButton onClick={action('/primaryClick')} message={'register'} hasStatus={{ type: 'error' }} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Secondary',
            sectionFn: () => (
              <span>
                <SecondaryButton onClick={action('/secondaryClick')} message={'anuler'} />
                <RenderCodeExample>
                  <SecondaryButton onClick={action('/secondaryClick')} message={'anuler'} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Positive',
            sectionFn: () => (
              <span>
                <PositiveButton onClick={action('/positiveClick')} message="confirm" />
                <RenderCodeExample>
                  <PositiveButton onClick={action('/positiveClick')} message="confirm" />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Disabled',
            sectionFn: () => (
              <span>
                <Button onClick={action('onClick')} message={'register'} disabled />
                <RenderCodeExample>
                  <Button onClick={action('onClick')} message={'register'} disabled />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Icon',
            sectionFn: () => (
              <span>
                <IconButton
                  icon={{ path: 'mapPin', color: colors.dodgerBlue, hoverColor: colors.dodgerBlueDark }}
                  onClick={action('/iconClick')}
                  onClick={action('onClick')}
                />
                <RenderCodeExample>
                  <IconButton
                    icon={{ path: 'mapPin', color: colors.dodgerBlue, hoverColor: colors.dodgerBlueDark }}
                    onClick={action('onClick')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'IconButton',
            subtitle: 'with message prop',
            sectionFn: () => (
              <span>
                <IconButton
                  icon={{ path: 'mapPin', color: colors.dodgerBlue, hoverColor: colors.dodgerBlueDark }}
                  message={'click me'}
                  onClick={action('/iconClick')}
                  onClick={action('onClick')}
                  font={{ color: colors.gullGray, hoverColor: colors.gullGrayDark }}
                />
                <RenderCodeExample>
                  <IconButton
                    icon={{ path: 'mapPin', color: colors.dodgerBlue }}
                    message={'click me'}
                    onClick={action('onClick')}
                    color={colors.gullGray}
                    font={{ color: colors.gullGray, hoverColor: colors.gullGrayDark }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'Confirm',
            sectionFn: () => (
              <span>
                <Badge
                  type="warning"
                  title="Deprecated"
                  message="Use instead the PrimaryButton with a status type of 'success'"
                />
                <ConfirmButton onClick={action('/anuler')} />
                <RenderCodeExample>
                  <ConfirmButton onClick={action('/anuler')} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Button',
            subtitle: 'IconButtonWithText',
            sectionFn: () => (
              <span>
                <Badge type="warning" title="Deprecated" message="Use instead the 'IconButton' component with a 'message' prop" />
                <IconButtonWithText
                  icon="plus"
                  iconColor={colors.shamrock}
                  hoverIconColor={colors.gullGray}
                  message="add"
                  onClick={action('onClick')}
                />
                <RenderCodeExample>
                  <IconButtonWithText
                    icon="plus"
                    iconColor={colors.shamrock}
                    hoverIconColor={colors.gullGray}
                    message="add"
                    onClick={action('onClick')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Icon', {
    chapters: [
      {
        sections: [
          {
            title: 'Feather Icons',
            sectionFn: () => (
              <div>
                <Text size={metrics.medium} tag="p" block>
                  Hover for path prop
                </Text>
                {Object.keys(iconPaths).map(
                  key =>
                    !['alertError', 'alertSuccess', 'alertInfo', 'alertWarning'].includes(key) && (
                      <Tooltip
                        key={key}
                        trigger="hover"
                        placement="top"
                        content={<Text tag="p" size={metrics.large} message={key} color="white" />}
                      >
                        <span style={{ margin: '20px', display: 'inline-block' }}>
                          <Icon
                            path={iconPaths[key]}
                            onClick={action(key)}
                            hoverColor={colors.secondary}
                            iconType={key === 'questionMarkInCircle' || key === 'crossInCircle' ? 'fill' : 'stroke'}
                            tabbable
                          />
                        </span>
                      </Tooltip>
                    ),
                )}
                <RenderCodeExample
                  component={
                    <Icon path="questionMarkInCircle" onClick={e => e} hoverColor={colors.secondary} iconType="fill" tabbable />
                  }
                />
              </div>
            ),
            options,
          },
          {
            title: 'Status Icons',
            sectionFn: () => {
              const statusTypes = ['error', 'warning', 'success', 'info'];
              return (
                <span>
                  <Text size={metrics.medium} tag="p">
                    Hover for {"'"}type{"'"} prop
                  </Text>

                  <div>
                    {statusTypes.map(key => (
                      <Tooltip
                        key={key}
                        trigger="hover"
                        placement="top"
                        content={<Text tag="p" size={metrics.large} message={key} color="white" />}
                      >
                        <span style={{ margin: '20px', display: 'inline-block' }}>
                          <StatusIcon hasStatus={{ type: key }} onClick={action(key)} tabbable />
                        </span>
                      </Tooltip>
                    ))}
                  </div>
                  <RenderCodeExample component={<StatusIcon hasStatus={{ type: 'error' }} onClick={e => e} tabbable />} />
                </span>
              );
            },
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Tags', {
    chapters: [
      {
        sections: [
          {
            title: 'Tag',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Tag onClick={action('/TagClick')} value="add me" added={false} />
                </Spacer>
                <Tag onClick={action('/TagClick')} value="Inside tag input component!" inInput />
                <RenderCodeExample component={<Tag onClick={action('/TagClick')} value="add me" inInput />} />
              </span>
            ),
            options,
          },
          {
            title: 'Tag input',
            sectionFn: () => (
              <span>
                <Spacer>
                  <TagInput onDelete={action('deleted')} onEnter={action('added')} placeholder="Type to add tag" />
                </Spacer>
                <TagInput
                  tags={['much tacl', 'many tag', 'amaze', 'wow', 'such wow', 'omg', 'plz', 'wow such tacl']}
                  onDelete={action('deleted')}
                  onEnter={action('added')}
                  placeholder="Type to add tag"
                />
                <RenderCodeExample
                  component={
                    <TagInput
                      tags={['much tacl', 'many tag', 'amaze', 'wow', 'such wow', 'omg', 'plz', 'wow such tacl']}
                      onDelete={action('deleted')}
                      onEnter={action('added')}
                      placeholder="Type to add tag"
                    />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Keywords', {
    chapters: [
      {
        sections: [
          {
            title: 'Keywords',
            subtitle: 'With click handler and hover color',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Keyword
                    onClick={action('/TagClick')}
                    message="experimental"
                    backgroundColor="LightSeaGreen"
                    backgroundHoverColor="DarkCyan"
                  />
                  <Keyword
                    onClick={action('/TagClick')}
                    message="pop"
                    backgroundColor="Orange"
                    backgroundHoverColor="DarkOrange"
                  />
                  <Keyword
                    onClick={action('/TagClick')}
                    message="electronic"
                    backgroundColor="DeepSkyBlue"
                    backgroundHoverColor="CornflowerBlue"
                    size="md"
                  />
                  <Keyword
                    onClick={action('/TagClick')}
                    message="new-wave"
                    backgroundColor="SlateGrey"
                    backgroundHoverColor="LightSlateGrey"
                    size="md"
                  />
                  <Keyword
                    onClick={action('/TagClick')}
                    message="psychedelic"
                    backgroundColor="MediumSlateBlue"
                    backgroundHoverColor="SlateBlue"
                    size="lg"
                  />
                  <Keyword
                    onClick={action('/TagClick')}
                    message="doom-metal"
                    backgroundColor="black"
                    backgroundHoverColor="Red"
                    size="lg"
                  />
                </Spacer>
                <RenderCodeExample>
                  <Keyword
                    onClick={action('/TagClick')}
                    message="experimental"
                    backgroundColor="LightSeaGreen"
                    backgroundHoverColor="DarkCyan"
                    size="sm"
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Keywords',
            subtitle: 'no interaction',
            sectionFn: () => (
              <span>
                <Keyword message="MediumSeaGreen" backgroundColor="MediumSeaGreen" />
                <Keyword message="SandyBrown" backgroundColor="SandyBrown" />
                <Keyword message="PowderBlue" backgroundColor="PowderBlue" textColor="MediumBlue" />
                <Keyword message="PeachPuff" backgroundColor="PeachPuff" textColor="Tomato" />
                <RenderCodeExample>
                  <Keyword message="PeachPuff" backgroundColor="PeachPuff" textColor="Tomato" size="sm" />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Keywords',
            subtitle: 'with icon',
            sectionFn: () => (
              <span>
                <Keyword
                  message="location"
                  backgroundColor="Aquamarine"
                  textColor="SlateGrey"
                  icon={{
                    path: 'mapPin',
                  }}
                />
                <Keyword
                  message="delivery"
                  backgroundColor="Coral"
                  icon={{
                    path: 'package',
                  }}
                />
                <Keyword
                  message="to do"
                  backgroundColor="MediumSeaGreen"
                  icon={{
                    path: 'check',
                  }}
                />
                <RenderCodeExample>
                  <Keyword
                    message="delivery"
                    backgroundColor="Coral"
                    icon={{
                      path: 'package',
                    }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Messages', {
    chapters: [
      {
        sections: [
          {
            title: 'Tooltip',
            sectionFn: () => (
              <span>
                <Tooltip
                  trigger="hover"
                  placement="top"
                  content={<Text tag="p" size={metrics.large} message="some info" color="white" />}
                >
                  <Text message="Hover me to see a tooltip" />
                </Tooltip>
                <RenderCodeExample
                  component={
                    <Tooltip trigger="hover" placement="top" content={<Text message="some info" />}>
                      <Text message="Hover me to see a tooltip" />
                    </Tooltip>
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Popover',
            sectionFn: () => (
              <span>
                <Popover
                  content={
                    <span>
                      <Text tag="p" size={metrics.large} message="Are you sure?" block />
                      <span style={{ float: 'right' }}>
                        <SecondaryButton onClick={action('/secondaryClick')} style={{ marginTop: '0.5em' }} message={'no'} />
                        <PrimaryButton onClick={action('/primaryClick')} message={'yes'} style={{ marginLeft: '0.3em' }} />
                      </span>
                    </span>
                  }
                >
                  <PrimaryButton message="Click me" />
                </Popover>
                <RenderCodeExample
                  component={
                    <Popover content={`/* Component */`} getApi={api => {}}>
                      <PrimaryButton message="Click me" />
                    </Popover>
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Form Helper',
            sectionFn: () => (
              <span>
                <Spacer>
                  <FormHelper
                    content={
                      <span>
                        <Text
                          tag="p"
                          size={metrics.medium}
                          message="Maybe go to the following link? What's gonna happen..?"
                          block
                        />
                        <TextLink href="http://google.com" message="go to google.com" size={metrics.medium} />
                      </span>
                    }
                    trigger="click"
                  />
                </Spacer>
                <FormHelper content="Just with text! but longer text... much longer blah blah blah blah" />
                <RenderCodeExample
                  component={
                    <FormHelper
                      content={
                        <span>
                          <Text
                            tag="p"
                            size={metrics.medium}
                            message="Maybe go to the following link? What's gonna happen..?"
                            block
                          />
                          <TextLink href="http://google.com" message="go to google.com" size={metrics.medium} />
                        </span>
                      }
                      trigger="click"
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Notifications',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Notification
                    header="Hello!"
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id porta libero."
                    dismissNotification={action('/dismissed')}
                  />
                </Spacer>
                <Spacer>
                  <Notification
                    header="Hello!"
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id porta libero."
                    dismissNotification={action('/dismissed')}
                    hasIcon
                  />
                </Spacer>
                <Notification
                  header="Hello!"
                  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id porta libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  dismissNotification={action('/dismissed')}
                  actionButtons={
                    <div>
                      <SecondaryButton onClick={action('/secondaryClick')} style={{ marginTop: '0.5em' }} message={'no'} />
                      <PrimaryButton onClick={action('/primaryClick')} message={'yes'} style={{ marginLeft: '0.3em' }} />
                    </div>
                  }
                />
                <RenderCodeExample
                  component={
                    <Notification
                      hasIcon
                      header="Hello!"
                      message="Lorem ipsum..."
                      dismissNotification={action('/dismissed')}
                      actionButtons={<PrimaryButton onClick={action('/primaryClick')} message={'yes'} />}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Messages',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Message hasStatus={{ type: 'info' }} message="Some extra info..." />
                </Spacer>
                <Spacer>
                  <Message hasStatus={{ type: 'success' }} message="Operation complete!" />
                </Spacer>
                <Spacer>
                  <Message hasStatus={{ type: 'warning' }} message="Heads up..." />
                </Spacer>
                <Message hasStatus={{ type: 'error' }} message="Hmmm... something went wrong" />
                <RenderCodeExample component={<Message hasStatus={{ type: 'info' }} message="Some extra info..." />} />
              </span>
            ),
            options,
          },
          {
            title: 'Alerts',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Alert hasStatus={{ type: 'info' }} dismiss={action('/dismissed')} message="Information for you!" />
                </Spacer>
                <Spacer>
                  <Alert hasStatus={{ type: 'success' }} dismiss={action('/dismissed')} message="Great, it worked!" />
                </Spacer>
                <Spacer>
                  <Alert hasStatus={{ type: 'warning' }} dismiss={action('/dismissed')} message="Just to let you know..." />
                </Spacer>
                <Alert hasStatus={{ type: 'error' }} dismiss={action('/dismissed')} message="Something has gone horribly wrong" />
                <RenderCodeExample
                  component={
                    <Alert hasStatus={{ type: 'error' }} dismiss={action('/dismissed')} message="Information for you!" />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Dropdown', {
    chapters: [
      {
        sections: [
          {
            title: 'Dropdown',
            title: 'String Values',
            sectionFn: () => (
              <span>
                <Dropdown
                  placeholder="Dropdown"
                  contents={[
                    { value: 'one', label: 'one' },
                    { value: 'two', label: 'two' },
                    { value: 'three', label: 'three' },
                    {
                      value: 'longText',
                      label:
                        "This one has some kinda really long label, like reeeeaally long. And wow doesn't it make the dropdown long?!",
                    },
                  ]}
                  onChange={action()}
                />
                <RenderCodeExample>
                  <Dropdown
                    placeholder="Dropdown"
                    contents={[
                      { value: 'one', label: 'one' },
                      { value: 'two', label: 'two' },
                      { value: 'three', label: 'three' },
                      {
                        value: 'longText',
                        label:
                          "This one has some kinda really long label, like reeeeaally long. And wow doesn't it make the dropdown long?!",
                      },
                    ]}
                    onChange={action()}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Dropdown',
            title: "React component 'values'",
            sectionFn: () => (
              <span>
                <Dropdown
                  placeholder={<Icon path="plus" color={colors.shamrock} size={20} />}
                  contents={[
                    {
                      label: <Icon path="plus" color={colors.shamrock} size={18} />,
                      value: 'plus',
                    },
                    {
                      label: <Icon path="x" color={colors.carnation} size={18} />,
                      value: 'cross',
                    },
                    {
                      label: <Icon path="check" color={colors.secondary} size={18} />,
                      value: 'check',
                    },
                  ]}
                  onChange={action()}
                />
                <RenderCodeExample
                  component={`
<Dropdown
  placeholder={<Icon path="plus" color={colors.shamrock} size={20} />}
  contents={[
    {
      label: <Icon path="plus" color={colors.shamrock} size={18} />,
      value: 'plus',
    },
    {
      label: <Icon path="x" color={colors.carnation} size={18} />,
      value: 'cross',
    },
    {
      label: <Icon path="check" color={colors.secondary} size={18} />,
      value: 'check',
    },
  ]}
  onChange={action()}
/>`}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Dropdown',
            title: 'minWidthIsContentWidth: false + contentClickSelectsItem: false',
            sectionFn: () => (
              <span>
                <Dropdown
                  contentClickSelectsItem={false}
                  minWidthIsContentWidth={false}
                  placeholder={<Icon path="plus" color={colors.shamrock} size={20} />}
                  contents={[
                    {
                      label: (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Icon path="plus" color={colors.shamrock} size={18} />
                          <Text message="Some longer text here" />
                        </span>
                      ),
                      value: 'longer text',
                    },
                    {
                      label: <Icon path="x" color={colors.carnation} size={18} />,
                      value: 'cross',
                    },
                    {
                      label: <Icon path="check" color={colors.secondary} size={18} />,
                      value: 'check',
                    },
                  ]}
                  onChange={action()}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Status Dropdown',
            sectionFn: () => (
              <span>
                <StatusDropdown placeholder="Condition" successOption="As new" warningOption="Used" errorOption="Damaged" />
                <RenderCodeExample
                  component={
                    <StatusDropdown placeholder="Condition" successOption="As new" warningOption="Used" errorOption="Damaged" />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Search', {
    chapters: [
      {
        sections: [
          {
            title: 'Search input',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Search searchSubmit={action('SubmitSearch')} placeholder="Recherer" />
                </Spacer>
                <Spacer>
                  <Search onChange={action('OnChange')} placeholder="Search" searchSubmit={action('submit')} />
                </Spacer>
                <Search loading placeholder="Recherer" />
                <RenderCodeExample
                  component={
                    <Search
                      onChange={action('OnChange')}
                      placeholder="Search"
                      searchSubmit={action('submit')}
                      loading={`/* bool */`}
                    />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Loader', {
    chapters: [
      {
        sections: [
          {
            title: 'Loader',
            sectionFn: () => (
              <span>
                <Loader rate={2000} />
                <RenderCodeExample component={<Loader rate={2000} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Spinner',
            sectionFn: () => (
              <span>
                <Spacer>
                  <div style={{ height: '100px', width: '100px' }}>
                    <Spinner />
                  </div>
                </Spacer>
                <RenderCodeExample component={<Spinner />} />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Status', {
    chapters: [
      {
        sections: [
          {
            title: 'Status Indicator Icon',
            sectionFn: () => (
              <span>
                <Spacer>
                  <StatusIndicatorIcon hasStatus={{ type: 'success' }} />
                </Spacer>
                <Spacer>
                  <StatusIndicatorIcon hasStatus={{ type: 'warning' }} />
                </Spacer>
                <Spacer>
                  <StatusIndicatorIcon hasStatus={{ type: 'error' }} />
                </Spacer>
                <Spacer>
                  <StatusIndicatorIcon hasStatus={{ type: 'success' }} filled />
                </Spacer>
                <Spacer>
                  <StatusIndicatorIcon hasStatus={{ type: 'warning' }} filled />
                </Spacer>
                <StatusIndicatorIcon hasStatus={{ type: 'error' }} filled />
                <RenderCodeExample component={<StatusIndicatorIcon hasStatus={{ type: 'warning' }} filled={`/* bool */`} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Notification Counter',
            sectionFn: () => (
              <span>
                <NotificationCounterCircle count={28} />
                <RenderCodeExample component={<NotificationCounterCircle count={28} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Notification Indicator',
            sectionFn: () => (
              <span>
                <Spacer>
                  <NotificationIndicator count={4} onClick={action()} />
                </Spacer>
                <NotificationIndicator />
                <RenderCodeExample component={<NotificationIndicator count={4} onClick={action()} />} />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Pagination', {
    chapters: [
      {
        sections: [
          {
            title: 'Pagination (simple)',
            sectionFn: () => <Pagination currentPage={1} dataLength={100} pageSize={10} navigateTo={action('go to page')} />,
            options,
          },
          {
            title: 'Pagination (with page size select)',
            sectionFn: () => (
              <Pagination
                currentPage={1}
                dataLength={100}
                pageSize={10}
                navigateTo={action('go to page')}
                showSizeChanger
                pageSizeOptions={[10, 20, 50, "all of 'em"]}
                onPageSizeChange={action()}
              />
            ),
            options,
          },
          {
            title: 'Pagination (with quick jumper)',
            sectionFn: () => (
              <Pagination
                currentPage={1}
                dataLength={4000}
                pageSize={10}
                navigateTo={action('go to page')}
                pageSizeOptions={[10, 20, 50]}
                showQuickJumper
              />
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Steps', {
    chapters: [
      {
        sections: [
          {
            title: 'Steps',
            sectionFn: () => (
              <span>
                <Steps currentIndex={0} handleStepClick={action('NavigateToPage')} steps={[{ key: 1 }, { key: 2 }, { key: 3 }]} />
                <RenderCodeExample>
                  <Steps
                    currentIndex={0}
                    handleStepClick={action('NavigateToPage')}
                    steps={[{ key: 1 }, { key: 2 }, { key: 3 }]}
                  />
                </RenderCodeExample>
              </span>
            ),

            options,
          },
          {
            title: 'Steps',
            sectionFn: () => (
              <span>
                <Steps
                  currentIndex={2}
                  handleStepClick={action('NavigateToPage')}
                  steps={[
                    { key: 1, hasStatus: { type: 'success' } },
                    { key: 2, hasStatus: { type: 'success' } },
                    { key: 3, hasStatus: { type: 'success' } },
                  ]}
                />
                <RenderCodeExample>
                  <Steps
                    currentIndex={2}
                    handleStepClick={action('NavigateToPage')}
                    steps={[
                      { key: 1, hasStatus: { type: 'success' } },
                      { key: 2, hasStatus: { type: 'success' } },
                      { key: 3, hasStatus: { type: 'success' } },
                    ]}
                  />
                </RenderCodeExample>
              </span>
            ),

            options,
          },
          {
            title: 'Steps',
            subtitle: 'with labels error status',
            sectionFn: () => (
              <span>
                <Steps
                  currentIndex={2}
                  handleStepClick={action('NavigateToPage')}
                  steps={[
                    { key: 1, label: 'First', hasStatus: { type: 'success' } },
                    { key: 2, label: 'Second', hasStatus: { type: 'error' } },
                    { key: 3, label: 'Final' },
                  ]}
                />
                <RenderCodeExample>
                  <Steps
                    currentIndex={2}
                    handleStepClick={action('NavigateToPage')}
                    steps={[
                      { key: 1, label: 'First', hasStatus: { type: 'success' } },
                      { key: 2, label: 'Second', hasStatus: { type: 'error' } },
                      { key: 3, label: 'Final' },
                    ]}
                  />
                </RenderCodeExample>
              </span>
            ),

            options,
          },
          {
            title: 'Steps',
            subtitle: 'vertical',
            sectionFn: () => (
              <span>
                <div style={{ display: 'inline-block' }}>
                  <Steps
                    currentIndex={1}
                    handleStepClick={action('NavigateToPage')}
                    steps={[
                      {
                        key: 1,
                        hasStatus: {
                          type: 'success',
                        },
                        label: 'Snap',
                      },
                      {
                        key: 2,
                        label: 'Crackle',
                      },
                      {
                        key: 3,
                        label: 'Pop',
                      },
                    ]}
                    direction="vertical"
                  />
                </div>
                <RenderCodeExample>
                  <Steps
                    currentIndex={1}
                    handleStepClick={action('NavigateToPage')}
                    steps={[
                      {
                        key: 1,
                        hasStatus: {
                          type: 'success',
                        },
                        label: 'Snap',
                      },
                      {
                        key: 2,
                        label: 'Crackle',
                      },
                      {
                        key: 3,
                        label: 'Pop',
                      },
                    ]}
                    direction="vertical"
                  />
                </RenderCodeExample>
              </span>
            ),

            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Progress', {
    chapters: [
      {
        sections: [
          {
            title: 'Progress (Line - in progress)',
            sectionFn: () => (
              <span>
                <Progress percentage={22} />
                <RenderCodeExample component={<Progress percentage={22} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Progress (Line - with status)',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Progress percentage={100} hasStatus={{ type: 'success' }} />
                </Spacer>
                <Spacer>
                  <Progress percentage={76} hasStatus={{ type: 'warning' }} />
                </Spacer>
                <Progress percentage={2} hasStatus={{ type: 'error' }} />
                <RenderCodeExample component={<Progress percentage={2} hasStatus={{ type: 'error' }} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Progress (Circle - in progress)',
            sectionFn: () => <CircleProgress percentage={77} size={10} />,
            options,
          },
          {
            title: 'Progress (Circle - Success / complete)',
            sectionFn: () => (
              <span>
                <Spacer>
                  <CircleProgress percentage={100} hasStatus={{ type: 'success' }} size={10} />
                </Spacer>
                <Spacer>
                  <CircleProgress percentage={14} hasStatus={{ type: 'warning' }} size={10} />
                </Spacer>
                <CircleProgress percentage={2} hasStatus={{ type: 'error' }} size={10} />
                <RenderCodeExample component={<CircleProgress percentage={2} hasStatus={{ type: 'error' }} size={10} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Progress (small)',
            sectionFn: () => (
              <span>
                <CircleProgress percentage={100} hasStatus={{ type: 'success' }} size={3} />
                <RenderCodeExample component={<CircleProgress percentage={100} hasStatus={{ type: 'success' }} size={3} />} />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Tabs', {
    chapters: [
      {
        sections: [
          {
            title: 'Tabs',
            sectionFn: () => (
              <span>
                <Tabs
                  activeTab={1}
                  tabs={[
                    {
                      title: { message: 'Aperçu' },
                      id: 1,
                      content: <span> [Aperçu content] </span>,
                    },
                    { title: { message: 'Finances' }, id: 2, content: <span> [Finances content] </span> },
                    { title: { message: 'Documents' }, id: 3, content: <span> [Documents content] </span> },
                    { title: { message: 'Tickets' }, id: 4, content: <span> [Tickets content] </span> },
                    {
                      title: { message: 'Big content' },
                      content: <LoremIpsum />,
                      id: 5,
                    },
                  ]}
                />
                <RenderCodeExample
                  component={`<Tabs
  activeTab={1}
  tabs={[
    { title: 'Aperçu', id: 1, content: <span> [Aperçu content] </span> },
    { title: 'Finances', id: 2, content: <span> [Finances content] </span> },
  ]}
/>`}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Tabs',
            subtitle: 'With Error Status',
            sectionFn: () => (
              <span>
                <Tabs
                  activeTab={2}
                  tabs={[
                    { title: { message: 'Aperçu' }, id: 1, content: <span> [Aperçu content] </span> },
                    {
                      title: { message: 'Finances' },
                      id: 2,
                      content: <span> [Finances content] </span>,
                      hasStatus: { type: 'error' },
                    },
                    { title: { message: 'Documents' }, id: 3, content: <span> [Documents content] </span> },
                    { title: { message: 'Tickets' }, id: 4, content: <span> [Tickets content] </span> },
                    { title: { message: 'Big content' }, id: 5, content: <LoremIpsum /> },
                  ]}
                />
                <RenderCodeExample
                  component={`<Tabs
  activeTab={2}
  tabs={[
    { title: 'Aperçu', id: 1, content: <span> [Aperçu content] </span> },
    { title: 'Finances',
      id: 2,
      content: <span> [Finances content] </span>,
      hasStatus: { type: 'error' }
    },
  ]}
/>`}
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Data Table', {
    chapters: [
      {
        sections: [
          {
            title: 'Table (Small data set)',
            sectionFn: () => (
              <span>
                <DataTable data={smallData} columns={testColumns} maxPageSize={12} minRows={5} withPagination={false} />
                <RenderCodeExample
                  component={`<DataTable
columns={[
  {
    accessor: 'ref',
    sortable: true,
    title: ' # Réf'
  },
  {
    accessor: 'proprietaire',
    title: 'Propriétaire'
  },
  {
    accessor: 'status',
    sortable: true,
    title: 'Status'
  },
  {
    accessor: 'id',
    title: 'ID'
  }
]}
data={[
  {
    id: '1',
    proprietaire: 'korys0',
    ref: 1,
    status: 'warning'
  },
  {
    id: '2',
    proprietaire: 'hritson1',
    ref: 2,
    status: 'warning'
  },
  {
    id: '3',
    proprietaire: 'cheams2',
    ref: 3,
    status: 'unknown'
  },
  {
    id: '4',
    proprietaire: 'cskells3',
    ref: 4,
    status: 'success'
  }
]}
maxPageSize={12}
minRows={5}
/>`}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Table (Large data set)',
            sectionFn: () => (
              <span>
                <DataTable
                  data={largeData}
                  columns={testColumns}
                  maxPageSize={12}
                  minRows={5}
                  showPaginationQuickJumper
                  pageSizeOptions={[10, 20, 100]}
                />
                <RenderCodeExample
                  component={`<DataTable
data={/* Large Dataset */}
columns={/* See above example */}
maxPageSize={12}
minRows={5}
showPaginationQuickJumper
/>`}
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  });

storiesOf('Form', module)
  .addDecorator(story => <Form onSubmit={action('SubmitForm')}>{story()}</Form>)
  .addWithChapters('Inputs', {
    chapters: [
      {
        sections: [
          {
            title: 'Text Input',
            sectionFn: () => (
              <span>
                <TextInput
                  onChange={action('onChange')}
                  onBlur={action('blur')}
                  value="Oliwia Voclain"
                  placeholder="enter time..."
                />
                <RenderCodeExample component={<TextInput onChange={action()} onBlur={action('blur')} value="Some text!" />} />
              </span>
            ),
            options,
          },
          {
            title: 'Text Input',
            subtitle: 'With input mask',
            sectionFn: () => (
              <span>
                <TextInput
                  onChange={action('onChange')}
                  onBlur={action('blur')}
                  value="12:51"
                  mask="99:99"
                  iconProps={{ path: 'clock' }}
                />
                <RenderCodeExample>
                  <TextInput
                    onChange={action('onChange')}
                    onBlur={action('blur')}
                    value="12:51"
                    mask="99:99"
                    iconProps={{ path: 'clock' }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Text Input',
            subtitle: 'In InputWrapper (with error status and FormHelper)',
            sectionFn: () => (
              <span>
                <InputWrapper
                  labelText="Email"
                  hasStatus={{ message: 'invalid email address', type: 'error' }}
                  formHelper={{
                    content: `very layout, such swag! very layout, oh my design, wow. very layout, such adipiscing. so layout, wow, much text, go ipsum. txt me! wow!
                    oh my swag. very dolor! yes master doge, many mattis, i can haz lorem! many doge! need full! rate me, go ipsum. many doge! go ipsum. wow`,
                    trigger: 'hover',
                  }}
                  value="somename@email,com"
                  showClearIcon
                >
                  <TextInput
                    onChange={action()}
                    onBlur={action('blur')}
                    type="text"
                    value="somename@email,com"
                    hasStatus={{ type: 'error' }}
                  />
                </InputWrapper>
                <RenderCodeExample
                  component={
                    <InputWrapper
                      labelText="Email"
                      hasStatus={{ message: 'invalid email address', type: 'error' }}
                      formHelper={{
                        content: `very layout, such swag!`,
                        trigger: 'hover',
                      }}
                      value="somename@email,com"
                      showClearIcon
                    >
                      <TextInput onChange={action()} onBlur={action('blur')} type="email" value="somename@email,com" />
                    </InputWrapper>
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Text Input',
            subtitle: 'disabled',
            sectionFn: () => (
              <span>
                <TextInput onChange={action()} onBlur={action('blur')} value="I can't be edited" disabled />
                <RenderCodeExample
                  component={<TextInput onChange={action()} onBlur={action('blur')} value="I can't be edited" disabled />}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            sectionFn: () => (
              <span>
                <NumberInput value={33} onChange={action()} onBlur={action('blur')} />
                <RenderCodeExample component={<NumberInput value={33} onChange={action()} onBlur={action('blur')} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'with icon',
            sectionFn: () => (
              <span>
                <Spacer>
                  <NumberInput
                    value={128}
                    onChange={action()}
                    onBlur={action('blur')}
                    iconProps={{
                      path: 'hash',
                    }}
                  />
                </Spacer>
                <Spacer>
                  <NumberInput
                    value={33}
                    onChange={action()}
                    onBlur={action('blur')}
                    iconProps={{
                      path: 'heart',
                      color: 'coral',
                    }}
                  />
                </Spacer>
                <NumberInput
                  value={39}
                  onChange={action()}
                  onBlur={action('blur')}
                  iconProps={{
                    path: 'thermometer',
                    color: colors.dodgerBlue,
                  }}
                />
                <RenderCodeExample
                  component={
                    <NumberInput
                      value={33}
                      onChange={action()}
                      onBlur={action('blur')}
                      iconProps={{
                        path: 'heart',
                        color: 'coral',
                      }}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'disabled',
            sectionFn: () => (
              <span>
                <NumberInput value={33} onChange={action()} onBlur={action('blur')} disabled />
                <RenderCodeExample component={<NumberInput value={33} onChange={action()} onBlur={action('blur')} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'unit at start + disabled example',
            sectionFn: () => (
              <span>
                <Spacer>
                  <NumberInput
                    value={100000}
                    units={{ options: 'CHF', position: 'start' }}
                    onChange={action()}
                    onBlur={action('blur')}
                  />
                </Spacer>
                <NumberInput
                  value={100000}
                  units={{ options: 'CHF', position: 'start' }}
                  onChange={action()}
                  onBlur={action('blur')}
                  disabled
                />
                <RenderCodeExample
                  component={
                    <NumberInput
                      value={100000}
                      units={{ options: 'CHF', position: 'start' }}
                      onChange={action()}
                      onBlur={action('blur')}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'unit at end',
            sectionFn: () => (
              <span>
                <NumberInput units={{ options: '%', position: 'end' }} min={0} max={100} onChange={action()} onBlur={action()} />
                <RenderCodeExample
                  component={
                    <NumberInput
                      units={{ options: '%', position: 'end' }}
                      min={0}
                      max={100}
                      onChange={action()}
                      onBlur={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'units select at start',
            sectionFn: () => (
              <span>
                <NumberInput
                  value={{ number: 10500, unit: 'CHF' }}
                  units={{
                    selectedValue: 'CHF',
                    position: 'start',
                    options: ['CHF', 'GBP'],
                  }}
                  min={0}
                  max={20000}
                  onChange={action()}
                  onBlur={action()}
                />
                <RenderCodeExample
                  component={
                    <NumberInput
                      units={{ options: 'CHF', position: 'end' }}
                      min={0}
                      max={100}
                      onChange={action()}
                      onBlur={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Number Input',
            subtitle: 'units select at end',
            sectionFn: () => (
              <span>
                <NumberInput
                  units={{
                    position: 'end',
                    options: ['kg', 'g'],
                  }}
                  min={0}
                  max={2000}
                  value={{ number: 1022, unit: 'kg' }}
                  onChange={action()}
                  onBlur={action()}
                />
                <RenderCodeExample
                  component={
                    <NumberInput
                      units={{ options: 'CHF', position: 'end' }}
                      min={0}
                      max={100}
                      onChange={action()}
                      onBlur={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'TextArea',
            sectionFn: () => (
              <span>
                <TextArea
                  value="oh my text. need design! much amet, want layout! very word! such ipsum. plz text! much lorem, so doge, wow, much full. very word! very dolor! need design! so doge, very dolor! wow! wow! plz ipsum, need full! need design! very elit, go aenean, very doge, such ipsum. much amet, very elit, i iz cute?. i can haz lorem."
                  onChange={action()}
                  onBlur={action('blur')}
                />
                <RenderCodeExample
                  component={
                    <TextArea
                      value="oh my text. need design! much amet, want layout! very word! such ipsum. plz text! much lorem, so doge, wow, much full."
                      onChange={action()}
                      onBlur={action('blur')}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Phone number',
            sectionFn: () => (
              <span>
                <Spacer>
                  <PhonenumberInput
                    regionSelectable
                    regionPlaceholder="Region"
                    placeholder="Enter number..."
                    returnRawValue
                    onChange={action('PhoneNumber')}
                    onFocus={action('focus-PhoneNumber')}
                    onBlur={action('blur-PhoneNumber')}
                  />
                </Spacer>
                <Spacer>
                  <PhonenumberInput
                    regionSelectable
                    regionPlaceholder="Region"
                    placeholder="Enter number..."
                    value={{
                      countryCode: 'im',
                      phoneNumber: '+447624272005',
                    }}
                    returnRawValue
                    onChange={action('PhoneNumber')}
                    onFocus={action('focus-PhoneNumber')}
                    onBlur={action('blur-PhoneNumber')}
                  />
                </Spacer>
                <Spacer>
                  <PhonenumberInput
                    placeholder="Enter number..."
                    returnRawValue
                    onChange={action('PhoneNumber')}
                    onFocus={action('focus-PhoneNumber')}
                    onBlur={action('blur-PhoneNumber')}
                  />
                </Spacer>
                <Spacer>
                  <PhonenumberInput
                    placeholder="Enter number..."
                    regionCode="ch"
                    returnRawValue
                    value="+41787182610"
                    onChange={action('PhoneNumber')}
                    onFocus={action('focus-PhoneNumber')}
                    onBlur={action('blur-PhoneNumber')}
                  />
                </Spacer>
                <PhonenumberInput
                  placeholder="Enter number..."
                  regionCode="ch"
                  returnRawValue
                  value={{
                    phoneNumber: '+447624272005',
                  }}
                  onChange={action('PhoneNumber')}
                  onFocus={action('focus-PhoneNumber')}
                  onBlur={action('blur-PhoneNumber')}
                  disabled
                />
                <RenderCodeExample
                  component={
                    <PhonenumberInput
                      placeholder="Enter number..."
                      regionCode="ch"
                      returnRawValue
                      value="+41787182610"
                      onChange={action('PhoneNumber')}
                      onBlur={action('blur-PhoneNumber')}
                      disabled="/* bool */"
                    />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Select', {
    chapters: [
      {
        sections: [
          {
            title: 'Select',
            subtitle: 'Object passed',
            sectionFn: () => (
              <span>
                <Select
                  options={[
                    { value: 'ch', label: 'Switzerland' },
                    { value: 'ar', label: 'Argentina' },
                    { value: 'ie', label: 'Ireland' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'en', label: 'England' },
                    { disabled: true, value: 'fr', label: 'France' },
                  ]}
                  onChange={action('SelectedValue')}
                  value="ch"
                  placeholder="Select an option..."
                />
                <RenderCodeExample
                  component={
                    <Select
                      options={[
                        { value: 'ch', label: 'Switzerland' },
                        { value: 'ar', label: 'Argentina' },
                        { value: 'ie', label: 'Ireland' },
                        { value: 'ca', label: 'Canada' },
                        { value: 'en', label: 'England' },
                        { disabled: true, value: 'fr', label: 'France' },
                      ]}
                      onChange={action('SelectedValue')}
                      placeholder="Select an option..."
                      defaultValue="ch"
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Select',
            subtitle: 'array passed',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Select
                    label="Number of cats"
                    placeholder="Select an option"
                    options={['1', '2', '3', '4', 'five', 'six', 'nine']}
                    onChange={action('SelectedValue')}
                    isCombobox={false}
                  />
                </Spacer>
                <Select
                  label="Number of cats"
                  placeholder="Select an option"
                  options={['💥', '🌮', '🌿', '🦑', '🌊', '🍕', '🛰']}
                  onChange={action('SelectedValue')}
                />
                <RenderCodeExample
                  component={
                    <Select
                      label="Number of cats"
                      placeholder="Select an option"
                      options={['💥', '🌮', '🌿', '🦑', '🌊', '🍕', '🛰']}
                      onChange={action('SelectedValue')}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Select',
            subtitle: 'disabed',
            sectionFn: () => (
              <Select
                label="Number of cats"
                placeholder="Select an option"
                options={['💥', '🌮', '🌿', '🦑', '🌊', '🍕', '🛰']}
                onChange={action('SelectedValue')}
                disabled
              />
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Switch', {
    chapters: [
      {
        sections: [
          {
            title: 'Switch',
            sectionFn: () => (
              <span>
                <Spacer>
                  <Switch value onChange={action('switched')} />
                </Spacer>
                <Spacer>
                  <Switch onChange={action('switched')} />
                </Spacer>
                <Spacer>
                  <Switch value disabled onChange={action('switched')} />
                </Spacer>
                <Switch disabled onChange={action('switched')} />
                <RenderCodeExample
                  component={`<Switch
            value={/* bool */}
            onChange={action('switched')}
            disabled={/* bool */}
          />`}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Switch',
            subtitle: 'with inner labels',
            sectionFn: () => (
              <span>
                <Badge title="New" type="info" />
                <Switch value onChange={action('switched')} displayInnerLabel messages={{ innerLabels: ['non', 'oui'] }} />
                <RenderCodeExample
                  component={`<Switch
    value={/* bool */}
    displayInnerLabel messages={{ innerLabels: ['non', 'oui'] }}
  />
                `}
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Radios', {
    chapters: [
      {
        sections: [
          {
            title: 'Radio Group',
            sectionFn: () => (
              <span>
                <RadioInputGroup
                  name="someName"
                  value={3}
                  onChange={action('selected option')}
                  options={[
                    { label: '🐟', value: 1 },
                    { label: '🎉', value: 2 },
                    { label: 'With some much longer text than the others, just to be sure', value: 3 },
                    { label: 'Covfeve', value: 4 },
                  ]}
                />
                <RenderCodeExample
                  component={
                    <RadioInputGroup
                      name="someName"
                      value={3}
                      onChange={action('selected option')}
                      options={[
                        { label: '🐟', value: 1 },
                        { label: '🎉', value: 2 },
                        { label: 'With some much longer text than the others, just to test!', value: 3 },
                        { label: 'Covfeve', value: 4 },
                      ]}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Radio Group',
            subtitle: 'Group disabled',
            sectionFn: () => (
              <span>
                <RadioInputGroup
                  name="allDisabled"
                  value={1}
                  disabled
                  options={[
                    { label: 'With some much longer text than the others, just to be sure', value: 1 },
                    { label: 'Covfeve', value: 2 },
                  ]}
                />
                <RenderCodeExample
                  component={<RadioInputGroup name="anything" value={1} disabled options="/* options... */" />}
                />
              </span>
            ),
            options,
          },
          {
            title: 'Radio Group',
            title: 'Option disabled',
            sectionFn: () => (
              <span>
                <RadioInputGroup
                  name="Another"
                  handleChange={action('selected option')}
                  value={2}
                  options={[
                    { label: "This option can't be selected", value: 1, disabled: true },
                    { label: 'this one though', value: 2 },
                    { label: 'Covfeve', value: 3 },
                  ]}
                />
                <RenderCodeExample
                  component={
                    <RadioInputGroup
                      name="Another22"
                      handleChange={action('selected option')}
                      value={2}
                      options={[
                        { label: "This option can't be selected", value: 1, disabled: true },
                        { label: 'this one though', value: 2 },
                        { label: 'Covfeve', value: 3 },
                      ]}
                    />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Checkboxes', {
    chapters: [
      {
        sections: [
          {
            title: 'Checkboxes',
            sectionFn: () => (
              <span>
                <CheckboxGroup
                  options={[
                    { label: 'This guy', value: 'data1' },
                    { label: 'And this one', value: 'data2' },
                    { label: 'This one too?', value: 'data3' },
                    { label: 'This option is disabled', value: 'data4', disabled: true },
                    { label: 'This option is checked && disabled', value: 'data5', disabled: true, checked: true },
                  ]}
                  onChange={action()}
                />
                <RenderCodeExample
                  component={
                    <CheckboxGroup
                      options={[
                        { label: 'This guy', value: 'data1' },
                        { label: 'And this one', value: 'data2' },
                        { label: 'This one too?', value: 'data3' },
                        { label: 'This option is disabled', value: 'data4', disabled: true },
                        { label: 'This option is checked && disabled', value: 'data5', disabled: true, checked: true },
                      ]}
                      onChange={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Checkboxes',
            subtitle: 'hide ✔',
            sectionFn: () => (
              <span>
                <CheckboxGroup
                  displayCheckMark={false}
                  options={[
                    { label: 'This guy', value: 'data1' },
                    { label: 'And this one', value: 'data2' },
                    { label: 'This one too?', value: 'data3' },
                    { label: 'This option is disabled', value: 'data4', disabled: true },
                    { label: 'This option is checked && disabled', value: 'data5', disabled: true, checked: true },
                  ]}
                  onChange={action()}
                />
                <RenderCodeExample
                  component={
                    <CheckboxGroup
                      displayCheckMark={false}
                      options={[
                        { label: 'This guy', value: 'data1' },
                        { label: 'And this one', value: 'data2' },
                        { label: 'This one too?', value: 'data3' },
                        { label: 'This option is disabled', value: 'data4', disabled: true },
                        { label: 'This option is checked && disabled', value: 'data5', disabled: true, checked: true },
                      ]}
                      onChange={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Checkboxes',
            subtitle: 'disabled group',
            sectionFn: () => (
              <span>
                <CheckboxGroup
                  options={[
                    { label: 'This guy', value: 'data1' },
                    { label: 'And this one', value: 'data2' },
                    { label: 'This one too?', value: 'data3' },
                    { label: 'This option is disabled', value: 'data4' },
                    { label: 'This option is checked && disabled', value: 'data5', checked: true },
                  ]}
                  disabled
                  onChange={action()}
                />
                <RenderCodeExample
                  component={
                    <CheckboxGroup
                      options={[
                        { label: 'This guy', value: 'data1' },
                        { label: 'And this one', value: 'data2' },
                        { label: 'This one too?', value: 'data3' },
                        { label: 'This option is disabled', value: 'data4' },
                        { label: 'This option is checked && disabled', value: 'data5', checked: true },
                      ]}
                      disabled
                      onChange={action()}
                    />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Slider', {
    chapters: [
      {
        sections: [
          {
            title: 'Slider',
            sectionFn: () => (
              <span>
                <Slider onChange={action()} units={{ before: 'chf', after: '-' }} />
                <RenderCodeExample component={<Slider onChange={action()} units={{ before: 'chf', after: '-' }} />} />
              </span>
            ),
            options,
          },
          {
            title: 'Range',
            sectionFn: () => (
              <span>
                <Range max={35000} defaultValue={[10000, 32000]} step={1000} onChange={action()} units={{ before: '£' }} />
                <RenderCodeExample
                  component={
                    <Range max={35000} defaultValue={[10000, 32000]} step={1000} onChange={action()} units={{ before: '£' }} />
                  }
                />
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('File Upload', {
    chapters: [
      {
        sections: [
          {
            title: 'Dropzone',
            sectionFn: () => (
              <span>
                <FileUpload
                  onChange={action('Files accepted')}
                  onDropError={action('Files rejected')}
                  maxFileSize={1073741824}
                  messages={{
                    acceptedFormat: 'Formats acceptés',
                    upto: "Jusqu'à",
                    compatibleFormatDrop: 'Glissez ici!',
                    incompatibleFormatDrop: 'Formats acceptés',
                    acceptedFilesDisplayText: 'images & PDFs',
                    dropNewFile: 'Glissez un nouveau document',
                  }}
                />
                <RenderCodeExample
                  component={
                    <FileUpload
                      onChange={action('Files accepted')}
                      onDropError={action('Files rejected')}
                      maxFileSize={1073741824}
                      messages={{
                        acceptedFormat: 'Formats acceptés',
                        upto: "Jusqu'à",
                        compatibleFormatDrop: 'Glissez ici!',
                        incompatibleFormatDrop: 'Formats acceptés',
                        acceptedFilesDisplayText: 'images & PDFs',
                        dropNewFile: 'Glissez un nouveau document',
                        fileTooBig: 'Fichier trop volumineux',
                      }}
                    />
                  }
                />
              </span>
            ),
            options,
          },
          {
            title: 'Preview',
            subtitle: 'set',
            sectionFn: () => (
              <span>
                <FilePreview
                  droppedFiles={[
                    {
                      name: '1.gif',
                      type: 'image/png',
                      preview: 'https://cdn.dribbble.com/users/1430920/screenshots/4111749/character_bike.gif',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                    },
                    {
                      name: '2.gif',
                      type: 'image/png',
                      preview: 'https://cdn.dribbble.com/users/1354693/screenshots/4111573/explodots_dribbble_01.gif',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                    },
                    {
                      name: '3.png',
                      type: 'image/png',
                      preview: 'https://cdn.dribbble.com/users/1704183/screenshots/4111829/ny4.jpg',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                    },
                    {
                      name: 'artboard.png',
                      type: 'image/png',
                      preview: 'https://cdn.dribbble.com/users/127188/screenshots/4103639/poster.jpg',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                    },
                    {
                      name: 'doge-doge-doge.png',
                      type: 'image/png',
                      preview: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      hasStatus: {
                        type: 'warning',
                        message: 'Warning: Seems to be taking a long time...',
                      },
                    },
                    {
                      name: '4.png',
                      type: 'image/png',

                      preview: 'https://cdn.dribbble.com/users/1798515/screenshots/4111640/lookbook-3_1000.png',
                      size: 32621,
                      uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      hasStatus: {
                        type: 'error',
                        message: 'Error: Connection dropped, please check your network connection',
                      },
                    },
                    {
                      name: 'document.pdf',
                      preview: 'fdfds',
                      size: 32621,
                      uploadPercentage: 100,
                      hasStatus: {
                        type: 'success',
                      },
                    },
                  ]}
                  handleRemove={action('remove')}
                />
                <RenderCodeExample>
                  <FilePreview
                    droppedFiles={[
                      {
                        name: '1.gif',
                        type: 'image/png',
                        preview: 'https://cdn.dribbble.com/users/1430920/screenshots/4111749/character_bike.gif',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      },
                      {
                        name: '2.gif',
                        type: 'image/png',
                        preview: 'https://cdn.dribbble.com/users/1354693/screenshots/4111573/explodots_dribbble_01.gif',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      },
                      {
                        name: '3.png',
                        type: 'image/png',
                        preview: 'https://cdn.dribbble.com/users/1704183/screenshots/4111829/ny4.jpg',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      },
                      {
                        name: 'artboard.png',
                        type: 'image/png',
                        preview: 'https://cdn.dribbble.com/users/127188/screenshots/4103639/poster.jpg',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                      },
                      {
                        name: 'doge-doge-doge.png',
                        type: 'image/png',
                        preview: 'http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                        hasStatus: {
                          type: 'warning',
                          message: 'Warning: Seems to be taking a long time...',
                        },
                      },
                      {
                        name: '4.png',
                        type: 'image/png',
                        preview: 'https://cdn.dribbble.com/users/1798515/screenshots/4111640/lookbook-3_1000.png',
                        size: 32621,
                        uploadPercentage: Math.floor(Math.random() * 100) + 1,
                        hasStatus: {
                          type: 'error',
                          message: 'Error: Connection dropped, please check your network connection',
                        },
                      },
                      {
                        name: 'document.pdf',
                        preview: 'fdfds',
                        size: 32621,
                        uploadPercentage: 100,
                        hasStatus: {
                          type: 'success',
                        },
                      },
                    ]}
                    handleRemove={action('remove')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Preview',
            subtitle: 'single item',
            sectionFn: () => (
              <FilePreviewItem
                file={{
                  name: '4.png',
                  preview: 'https://images.unsplash.com/photo-1499995909106-2d6741de64ec?auto=format&fit=crop&w=1834&q=80',
                  size: 32621,
                  uploadPercentage: Math.floor(Math.random() * 100) + 1,
                  uploadStatus: 'error',
                  type: 'image/png',
                }}
                handleRemove={action('remove')}
              />
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single item',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{
                    name: 'Name',
                    docType: 'Document Type',
                    fileTooBig: 'File is too large. Please try another',
                    syncdMessage: "sync'd!",
                  }}
                  onDelete={action('delete')}
                  docTypes={['one doc', 'other', '📉']}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 100,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                  isSyncd
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{
                      name: 'Name',
                      docType: 'Document Type',
                      fileTooBig: 'File is too large. Please try another',
                      syncdMessage: "sync'd!",
                    }}
                    onDelete={action('delete')}
                    docTypes={['one doc', 'other', '📉']}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 100,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                    isSyncd
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single item [fr]',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{
                    name: 'Nom',
                    docType: 'type de fichier',
                    fileTooBig: 'fishier trop grand',
                    bitUnits: ['octets', 'kilooctets'],
                  }}
                  onDelete={action('delete')}
                  docTypes={['one doc', 'other', '📉']}
                  file={{
                    name: 'test.pdf',
                    type: 'document/pdf',
                    size: 100,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    docTypes={['one doc', 'other', '📉']}
                    file={{
                      name: 'test.pdf',
                      type: 'document/pdf',
                      size: 100,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single item - editable',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                  onDelete={action('delete')}
                  onEdit={action('edit')}
                  docTypes={['one doc', 'other', '📉']}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 100,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    onEdit={action('edit')}
                    docTypes={['one doc', 'other', '📉']}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 100,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single item - File too large',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                  onDelete={action('delete')}
                  onEdit={action('edit')}
                  docTypes={['one doc', 'other', '📉']}
                  maxFileSize={200}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 32621000000,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    onEdit={action('edit')}
                    docTypes={['one doc', 'other', '📉']}
                    maxFileSize={200}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 32621000000,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single item - No doc type selected',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                  onDelete={action('delete')}
                  onEdit={action('edit')}
                  docTypes={['one doc', 'other', '📉']}
                  hasStatus={{ type: 'error', message: 'No Document type selected!' }}
                  maxFileSize={1000000}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 32621,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    onEdit={action('edit')}
                    docTypes={['one doc', 'other', '📉']}
                    hasStatus={{ type: 'error', message: 'No Document type selected!' }}
                    maxFileSize={1000000}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 32621,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single - Validated',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                  onDelete={action('delete')}
                  onEdit={action('edit')}
                  docTypes={['one doc', 'other', '📉']}
                  docTypeValue="📉"
                  maxFileSize={1000000}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 32621,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    onEdit={action('edit')}
                    docTypes={['one doc', 'other', '📉']}
                    docTypeValue="📉"
                    maxFileSize={1000000}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 32621,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'File Manager',
            subtitle: 'Single - single docType passed',
            sectionFn: () => (
              <span>
                <FileManagerItem
                  onChange={action('doctype')}
                  messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                  onDelete={action('delete')}
                  onEdit={action('edit')}
                  docTypes="other"
                  maxFileSize={1000000}
                  file={{
                    name: 'test.png',
                    type: 'image/png',
                    size: 32621,
                    preview:
                      'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                  }}
                  index={1}
                />
                <RenderCodeExample>
                  <FileManagerItem
                    onChange={action('doctype')}
                    messages={{ name: 'Name', docType: 'Document Type', fileTooBig: 'File is too large. Please try another' }}
                    onDelete={action('delete')}
                    onEdit={action('edit')}
                    docTypes="other"
                    maxFileSize={1000000}
                    file={{
                      name: 'test.png',
                      type: 'image/png',
                      size: 32621,
                      preview:
                        'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f412a6ee4af609b0e3f4f85248f2879f&auto=format&fit=crop&w=1350&q=80',
                    }}
                    index={1}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Calendar', {
    chapters: [
      {
        sections: [
          {
            title: 'Single Date Picker',
            sectionFn: () => (
              <span>
                <Calendar onChange={action()} placeholder="Pick a start date" displayFormat="DD.MM.YYYY" />
                <RenderCodeExample>
                  <Calendar onChange={action()} placeholder="Pick a start date" displayFormat="DD.MM.YYYY" />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'SingleDatePicker (2 months display)',
            sectionFn: () => (
              <span>
                <Calendar onChange={action()} double />
                <RenderCodeExample>
                  <Calendar onChange={action()} double />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Address Search', {
    chapters: [
      {
        sections: [
          {
            title: 'Address autocomplete',
            subtitle: 'Search string',
            sectionFn: () => (
              <span>
                <AddressSearch value="EPFL" onChange={action('Change')} />
                <RenderCodeExample>
                  <AddressSearch value="EPFL" onChange={action('Change')} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Address autocomplete',
            subtitle: 'Google api address object',
            sectionFn: () => (
              <span>
                <AddressSearch
                  renderFooter={false}
                  value={{
                    address_components: ['1', '2'],
                    formatted_address: 'Route Cantonale, 1015 Lausanne, Switzerland',
                    geometry: {
                      location: {
                        lat: () => null,
                        lng: () => null,
                      },
                      location_type: 'GEOMETRIC_CENTER',
                      viewport: '',
                    },
                    place_id: 'ChIJY7RUkvwwjEcRLDtAQARaCwk',
                    types: ['establishment', 'point_of_interest', 'university'],
                  }}
                  onChange={action('Change')}
                />
                <RenderCodeExample>
                  <AddressSearch
                    renderFooter={false}
                    value={{
                      address_components: ['1', '2'],
                      formatted_address: 'Route Cantonale, 1015 Lausanne, Switzerland',
                      geometry: {
                        location: {
                          lat: () => null,
                          lng: () => null,
                        },
                        location_type: 'GEOMETRIC_CENTER',
                        viewport: '',
                      },
                      place_id: 'ChIJY7RUkvwwjEcRLDtAQARaCwk',
                      types: ['establishment', 'point_of_interest', 'university'],
                    }}
                    onChange={action('Change')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Toggle', {
    chapters: [
      {
        sections: [
          {
            title: 'Toggle',
            subtitle: '',
            sectionFn: () => (
              <span>
                <Toggle
                  onChange={action('Change')}
                  options={[
                    { label: 'one', value: 1 },
                    { label: 'two', value: 2, disabled: true },
                    { label: 'three', value: 3 },
                    { label: 'four', value: 4 },
                    { label: 'five', value: 5 },
                    { label: 'six', value: 6 },
                    { label: 'seven', value: 7 },
                  ]}
                  value={3}
                />
                <RenderCodeExample>
                  <Toggle
                    onChange={action('Change')}
                    options={[
                      { label: 'one', value: 1 },
                      { label: 'two', value: 2, disabled: true },
                      { label: 'three', value: 3 },
                      { label: 'four', value: 4 },
                      { label: 'five', value: 5 },
                      { label: 'six', value: 6 },
                      { label: 'seven', value: 7 },
                    ]}
                    value={3}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Toggle',
            subtitle: '',
            sectionFn: () => (
              <span>
                <Toggle
                  onChange={action('Change')}
                  options={[{ label: 'one', value: 1 }, { label: 'two', value: 2 }, { label: 'three', value: 3 }]}
                  value={3}
                  disabled
                />
                <RenderCodeExample>
                  <Toggle
                    onChange={action('Change')}
                    options={[
                      { label: 'one', value: 1 },
                      { label: 'two', value: 2, disabled: true },
                      { label: 'three', value: 3 },
                      { label: 'four', value: 4 },
                      { label: 'five', value: 5 },
                      { label: 'six', value: 6 },
                      { label: 'seven', value: 7 },
                    ]}
                    value={3}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  })
  .addWithChapters('Field Component', {
    chapters: [
      {
        sections: [
          {
            title: 'Field',
            subtitle: 'Text',
            sectionFn: () => (
              <span>
                <Field
                  type="text"
                  iconProps={{ path: 'user' }}
                  value="Solange Fosse"
                  label="Name"
                  onBlur={action('blur')}
                  onChange={action('onChange')}
                  inputWrapperProps={{
                    displayStatusIcon: false,
                  }}
                />
                <RenderCodeExample>
                  <Field type="text" value="Some text!" label="Text" onChange={action()} onBlur={action('blur')} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Text - with description text',
            sectionFn: () => (
              <span>
                <Field
                  type="text"
                  value="Some text!"
                  label="Name"
                  onBlur={action('blur')}
                  onChange={action('onChange')}
                  inputWrapperProps={{
                    displayStatusIcon: false,
                  }}
                  description="This is some sample text description etc etc! Wahoo!"
                />
                <RenderCodeExample>
                  <Field
                    type="text"
                    value="Some text!"
                    label="Name"
                    onBlur={action('blur')}
                    onChange={action('onChange')}
                    inputWrapperProps={{
                      displayStatusIcon: false,
                    }}
                    description="This is some sample text description etc etc! Wahoo!"
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Text - Label on top + description text',
            sectionFn: () => (
              <span>
                <Field
                  type="text"
                  value="Some text!"
                  label="Name"
                  onBlur={action('blur')}
                  onChange={action('onChange')}
                  inputWrapperProps={{
                    displayStatusIcon: false,
                  }}
                  formHelper={{ content: "perhaps not 'passw0rd'? 🤦️" }}
                  labelPosition="top"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu odio ornare, aliquam sem vitae, gravida risus. Integer eget convallis mauris. Integer mollis pellentesque odio."
                />
                <RenderCodeExample>
                  <Field
                    type="text"
                    value="Some text!"
                    label="Text"
                    onChange={action()}
                    onBlur={action('blur')}
                    labelPosition="top"
                    description="

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ligula massa. In vitae rhoncus velit, non viverra orci. Pellentesque. "
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Text with field props to remove validation',
            sectionFn: () => (
              <span>
                <Field
                  type="text"
                  onChange={action('onChange')}
                  hasStatus={{ message: 'invalid email address', type: 'error' }}
                  value="!nva1!D †3x††"
                  inputWrapperProps={{
                    displayValidationMessage: false,
                    displayStatusIcon: false,
                    displayFormHelper: false,
                    showClearIcon: false,
                  }}
                  displayValidationBorderColor
                />
                <RenderCodeExample>
                  <Field
                    type="text"
                    hasStatus={{ message: 'invalid email address', type: 'error' }}
                    value="!nva1!D †3x††"
                    onChange={action('onChange')}
                    inputWrapperProps={{
                      displayValidationMessage: false,
                      displayStatusIcon: false,
                      displayFormHelper: false,
                      showClearIcon: false,
                    }}
                    displayValidationBorderColor
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Email',
            sectionFn: () => (
              <span>
                <Field
                  type="email"
                  onChange={action('onChange')}
                  label="Email Address"
                  onBlur={action('blur')}
                  hasStatus={{ message: 'invalid email address', type: 'error' }}
                  inputWrapperProps={{ displayStatusIcon: false }}
                />
                <RenderCodeExample>
                  <Field
                    type="email"
                    label="Email Address"
                    onChange={action()}
                    onBlur={action('blur')}
                    hasStatus={{ message: 'invalid email address', type: 'error' }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Password',
            sectionFn: () => (
              <span>
                <Field
                  type="password"
                  label="Password"
                  value="12345"
                  onChange={action('onChange')}
                  onBlur={action('blur')}
                  iconProps={{ path: 'lock' }}
                  hasStatus={{ message: 'invalid email address', type: 'error' }}
                  formHelper={{ content: "perhaps not 'passw0rd'? 🤦️" }}
                />
                <RenderCodeExample>
                  <Field
                    type="password"
                    label="Password"
                    onChange={action()}
                    value="12345"
                    onBlur={action('blur')}
                    hasStatus={{ message: 'invalid email address', type: 'error' }}
                    formHelper={{ content: "perhaps not 'passw0rd'? 🤦️" }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'hidden',
            sectionFn: () => (
              <span>
                <Field type="hidden" onBlur={e => e} onChange={action('onChange')} />
                <RenderCodeExample>
                  <Field type="hidden" onChange={e => e} onBlur={e => e} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Number',
            sectionFn: () => (
              <span>
                <Field
                  type="number"
                  label="Price"
                  units={{ options: 'CHF', position: 'end' }}
                  onChange={action()}
                  value={0}
                  formHelper={{ content: 'Whaddup?' }}
                  onBlur={action('blur')}
                />
                <Field
                  type="number"
                  label="Price"
                  units={{ options: 'CHF', position: 'end' }}
                  onChange={action()}
                  value={10}
                  formHelper={{ content: 'Whaddup?' }}
                  onBlur={action('blur')}
                />
                <Field
                  type="number"
                  label="Price"
                  units={{ options: ['CHF', 'GBP'], position: 'end' }}
                  onChange={action()}
                  value={10}
                  formHelper={{ content: 'Whaddup?' }}
                  onBlur={action('blur')}
                />
                <RenderCodeExample>
                  <Field
                    type="number"
                    label="Price"
                    units={{ options: 'CHF', position: 'end' }}
                    onChange={action()}
                    value={0}
                    formHelper={{ content: 'Whaddup?' }}
                    onBlur={action('blur')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'TextArea',
            sectionFn: () => (
              <span>
                <Field
                  label="Long text"
                  type="textArea"
                  value={`oh my lorem, such word. rate me! rate me. plz elit, much layout! oh my doge! go design! wow! want layout, many doge! very text, plz lorem! very doge! oh my lorem, go sit! wow! wow. want layout, want layout`}
                  onChange={action()}
                  onBlur={action('blur')}
                />
                <RenderCodeExample>
                  <Field
                    label="Long text"
                    type="textArea"
                    value={`oh my lorem, such word. rate me! rate me... etc`}
                    onChange={action()}
                    onBlur={action('blur')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Select',
            sectionFn: () => (
              <span>
                <Field
                  type="select"
                  label="Country"
                  options={[
                    {
                      label: 'Switzerland',
                      value: 'ch',
                    },
                    {
                      label: 'Argentina',
                      value: 'ar',
                    },
                    {
                      label: 'Ireland',
                      value: 'ie',
                    },
                    {
                      label: 'Canada',
                      value: 'ca',
                    },
                    {
                      label: 'England',
                      value: 'en',
                    },
                    {
                      disabled: true,
                      label: 'France',
                      value: 'fr',
                    },
                  ]}
                  onChange={action('SelectedValue')}
                  value="ie"
                />
                <RenderCodeExample>
                  <Field
                    type="select"
                    label="Country"
                    options={[
                      {
                        label: 'Switzerland',
                        value: 'ch',
                      },
                      {
                        label: 'Argentina',
                        value: 'ar',
                      },
                      {
                        label: 'Ireland',
                        value: 'ie',
                      },
                      {
                        label: 'Canada',
                        value: 'ca',
                      },
                      {
                        label: 'England',
                        value: 'en',
                      },
                      {
                        disabled: true,
                        label: 'France',
                        value: 'fr',
                      },
                    ]}
                    onChange={action('SelectedValue')}
                    value="ie"
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            title: 'Select (Long array)',
            sectionFn: () => (
              <span>
                <Field
                  type="select"
                  label="Country"
                  options={[
                    'Afghanistan',
                    'Albania',
                    'Algeria',
                    'Andorra',
                    'Angola',
                    'Anguilla',
                    'Antigua & Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bermuda',
                    'Bhutan',
                    'Bolivia',
                    'Bosnia & Herzegovina',
                    'Botswana',
                    'Brazil',
                    'British Virgin Islands',
                    'Brunei',
                    'Bulgaria',
                    'Burkina Faso',
                    'Burundi',
                    'Cambodia',
                    'Cameroon',
                    'Cape Verde',
                    'Cayman Islands',
                    'Chad',
                    'Chile',
                    'China',
                    'Colombia',
                    'Congo',
                    'Cook Islands',
                    'Costa Rica',
                    'Cote D Ivoire',
                    'Croatia',
                    'Cruise Ship',
                    'Cuba',
                    'Cyprus',
                    'Czech Republic',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Estonia',
                    'Ethiopia',
                    'Falkland Islands',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'French Polynesia',
                    'French West Indies',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Gibraltar',
                    'Greece',
                    'Greenland',
                    'Grenada',
                    'Guam',
                    'Guatemala',
                    'Guernsey',
                    'Guinea',
                    'Guinea Bissau',
                    'Guyana',
                    'Haiti',
                    'Honduras',
                    'Hong Kong',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran',
                    'Iraq',
                    'Ireland',
                    'Isle of Man 🇮🇲',
                    'Israel',
                    'Italy',
                    'Jamaica',
                    'Japan',
                    'Jersey',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kuwait',
                    'Kyrgyz Republic',
                    'Laos',
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Macau',
                    'Macedonia',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Mauritania',
                    'Mauritius',
                    'Mexico',
                    'Moldova',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Namibia',
                    'Nepal',
                    'Netherlands',
                    'Netherlands Antilles',
                    'New Caledonia',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palestine',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Poland',
                    'Portugal',
                    'Puerto Rico',
                    'Qatar',
                    'Reunion',
                    'Romania',
                    'Russia',
                    'Rwanda',
                    'Saint Pierre & Miquelon',
                    'Samoa',
                    'San Marino',
                    'Satellite',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Slovakia',
                    'Slovenia',
                    'South Africa',
                    'South Korea',
                    'Spain',
                    'Sri Lanka',
                    'St Kitts & Nevis',
                    'St Lucia',
                    'St Vincent',
                    'St. Lucia',
                    'Sudan',
                    'Suriname',
                    'Swaziland',
                    'Sweden',
                    'Switzerland',
                    'Syria',
                    'Taiwan',
                    'Tajikistan',
                    'Tanzania',
                    'Thailand',
                    "Timor L'Este",
                    'Togo',
                    'Tonga',
                    'Trinidad & Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Turks & Caicos',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom',
                    'Uruguay',
                    'Uzbekistan',
                    'Venezuela',
                    'Vietnam',
                    'Virgin Islands (US)',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                  ]}
                  onChange={action('SelectedValue')}
                  onBlur={action('blur')}
                  value="Switzerland"
                />
                <RenderCodeExample>
                  <Field
                    type="select"
                    label="Country"
                    options={['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', '/* etc */']}
                    onChange={action('SelectedValue')}
                    onBlur={action('blur')}
                    value="Switzerland"
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Switch',
            sectionFn: () => (
              <span>
                <Field label="On or not?" type="switch" onChange={action('SelectedValue')} onBlur={action('blur')} />
                <RenderCodeExample>
                  <Field label="On or not?" type="switch" onChange={action('SelectedValue')} onBlur={action('blur')} />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'RadioGroup',
            sectionFn: () => (
              <span>
                <Field
                  type="radio"
                  label="Which one??"
                  name="aRadioGroup"
                  options={[
                    { label: 'Bam! 💥', value: 1 },
                    { label: 'Nope! 🙅‍♂️', value: 2 },
                    { label: 'Meh 🤷‍♀️ ', value: 3 },
                    { label: 'Covfeve', value: 4 },
                  ]}
                  value={4}
                  onChange={action('SelectedValue')}
                  onBlur={action('blur')}
                  stopPropagation
                />
                <RenderCodeExample>
                  <Field
                    type="radio"
                    label="Which one??"
                    name="aRadioGroup"
                    options={[
                      { label: 'Bam! 💥', value: 1 },
                      { label: 'Nope! 🙅‍♂️', value: 2 },
                      { label: 'Meh 🤷‍♀️ ', value: 3 },
                      { label: 'Covfeve', value: 4 },
                    ]}
                    value={4}
                    onChange={action('SelectedValue')}
                    onBlur={action('blur')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Toggle',
            sectionFn: () => (
              <span>
                <Field
                  type="toggle"
                  label="Toggle me"
                  name="toggle"
                  options={[
                    { label: 'Bam!', value: 1 },
                    { label: 'Bim!', value: 3 },
                    { label: 'Nope!️', value: 2 },
                    { label: 'Covfeve', value: 4 },
                  ]}
                  value={4}
                  onChange={action('SelectedValue')}
                  onBlur={action('blur')}
                />
                <RenderCodeExample>
                  <Field
                    type="toggle"
                    label="Which one??"
                    name="aRadioGroup"
                    options={[
                      { label: 'Bam!', value: 1 },
                      { label: 'Nope!️', value: 2 },
                      { label: 'Yee', value: 3 },
                      { label: 'Covfeve', value: 4 },
                    ]}
                    value={4}
                    onChange={action('SelectedValue')}
                    onBlur={action('blur')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Checkboxes',
            sectionFn: () => (
              <span>
                <Field
                  type="checkbox"
                  label="Which one??"
                  options={[
                    { label: 'Bam! 💥', value: 1 },
                    { label: 'Nope! 🙅‍♂️', value: 2 },
                    { label: 'Meh 🤷‍♀️', value: 3 },
                    { label: 'Covfeve', value: 4, checked: true },
                  ]}
                  onChange={action('SelectedValue')}
                />
                <RenderCodeExample>
                  <Field
                    type="checkbox"
                    label="Which one??"
                    options={[
                      { label: 'Bam! 💥', value: 1 },
                      { label: 'Nope! 🙅‍♂️', value: 2 },
                      { label: 'Meh 🤷‍♀️', value: 3 },
                      { label: 'Covfeve', value: 4, checked: true },
                    ]}
                    onChange={action('SelectedValue')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Slider',
            sectionFn: () => (
              <span>
                <Field
                  type="slider"
                  label="Up to how many?"
                  defaultValue={100}
                  min={0}
                  max={1000}
                  units={{ before: '$' }}
                  onChange={action('date')}
                />
                <RenderCodeExample>
                  <Field
                    type="slider"
                    label="Up to how many?"
                    defaultValue={100}
                    min={0}
                    max={1000}
                    units={{ before: '$' }}
                    onChange={action('date')}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Range',
            sectionFn: () => (
              <span>
                <Field
                  type="range"
                  label="Up to how many?"
                  defaultValue={[300, 500]}
                  min={0}
                  max={1000}
                  units={{ after: 'cats' }}
                  onChange={action('date')}
                  required
                />
                <RenderCodeExample>
                  <Field
                    type="range"
                    label="Up to how many?"
                    defaultValue={[300, 500]}
                    min={0}
                    max={1000}
                    units={{ after: 'cats' }}
                    onChange={action('date')}
                    required
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'FileUpload',
            sectionFn: () => (
              <span>
                <Field
                  type="file"
                  accept="image/*, application/pdf"
                  acceptedFilesPrettyNames="images, pdf"
                  onChange={action('accepted')}
                  onDropError={action('err')}
                  maxFileSize={1073741824}
                />
                <RenderCodeExample>
                  <Field
                    type="file"
                    accept="image/*, application/pdf"
                    acceptedFilesPrettyNames="images, pdf"
                    onChange={action('accepted')}
                    onDropError={action('err')}
                    maxFileSize={1073741824}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
          {
            title: 'Field',
            subtitle: 'Calendar',
            sectionFn: () => {
              const start = moment().subtract(10, 'days');
              const end = moment().add(10, 'days');
              return (
                <span>
                  <Spacer>
                    <Field
                      type="calendar"
                      label="Start"
                      onChange={action('date')}
                      onFocus={action()}
                      allowedDateRange={{ start, end }}
                      displayFormat="DD/MM/YYYY"
                      locale="en"
                      withCalendar={false}
                      hasStatus={{ message: 'Invalid date!', type: 'error' }}
                      displayValidationBorderColor
                    />
                  </Spacer>
                  <Spacer>
                    <Field
                      type="calendar"
                      label="Start"
                      onChange={action('date')}
                      onFocus={action()}
                      allowedDateRange={{ start, end }}
                      displayFormat="DD/MM/YYYY"
                      locale="en"
                    />
                  </Spacer>
                  <Field
                    type="calendar"
                    label="Start"
                    value={moment()}
                    onChange={action('date')}
                    onFocus={action()}
                    displayFormat="DD/MM/YYYY"
                    locale="en"
                  />
                  <RenderCodeExample
                    comment=" start and end date range should be a valid Momentjs object or in (US) 'MM/DD/YYYY' format if using a string"
                    component={`<Field
            type="calendar"
            label="Start"
            onChange={action('date')}
            onFocus={action()}
            allowedDateRange={{ start: '05/02/2018', end: moment('02/05/2018', 'DD/MM/YYYY') }}
            displayFormat="DD.MM.YYYY"
            locale="en"
            withCalendar={false}
          />`}
                  />
                </span>
              );
            },
            options,
          },
          {
            title: 'Field',
            subtitle: 'PhoneNumber',
            sectionFn: () => (
              <span>
                <Field
                  type="phoneNumber"
                  label="Mobile Number"
                  value={{ countryCode: 'ch', phoneNumber: '+41787182610' }}
                  regionSelectable
                  placeholder="Enter number..."
                  returnRawValue
                  onChange={action('PhoneNumber')}
                  onFocus={action('focus-PhoneNumber')}
                  onBlur={action('blur-PhoneNumber')}
                  formHelper={{
                    content: 'what you clicking me for???',
                  }}
                />
                <RenderCodeExample>
                  <Field
                    type="phoneNumber"
                    label="Mobile Number"
                    value={{ countryCode: 'ch', phoneNumber: '+41787182610' }}
                    regionSelectable
                    placeholder="Enter number..."
                    regionCode="ch"
                    returnRawValue
                    onChange={action('PhoneNumber')}
                    onFocus={action('focus-PhoneNumber')}
                    onBlur={action('blur-PhoneNumber')}
                    formHelper={{
                      content: 'what you clicking me for???',
                    }}
                  />
                </RenderCodeExample>
              </span>
            ),
            options,
          },
        ],
      },
    ],
  });
storiesOf('Theming', module).addWithChapters('Theme Provider', {
  chapters: [
    {
      sections: [
        {
          title: 'Theme configuration shapes',
          sectionFn: () => {
            return (
              <span>
                <Text tag="p" size={metrics.medium} block>
                  Here are the two theme config shapes. The values shown are the defaults and the value types are written as
                  comments.
                </Text>
                <RenderCodeExample
                  component={`const baseConfig = {
      colors: {
        secondary: '#00B4FF', // color string
        info: '#00B4FF', // color string
        secondaryDark: '#00A1E5', // color string
        background: '#fff', // color string

        // greys
        primary: '#424F60', // color string
        labelGrey: '#7A838F', // color string
        borderGrey: '#CDD2D6', // color string
        darkerGrey: '#758192', // color string
        midGrey: '#9CA8BA', // color string
        lightGrey: '#E5EAEF', // color string
        offWhiteGrey: '#FBFBFB', // color string

        // status
        error: '#F54B5E', // color string
        warning: '#FFBF00', // color string
        success: '#40C3A7', // color string

        // status Hover
        errorDark: '#DC4354', // color string
        warningDark: '#E5AB00', // color string
        successDark: '#39AC94', // color string
      },
      spacing: {
        padding: {
          sm: 8, // number in pixels
          md: 16, // number in pixels
          lg: 32, // number in pixels
        },
        height: 32, // number in pixels
      },
      borderRadius: {
        sm: 0, // number in pixels
        md: 4, // number in pixels
        mdLg: 10, // number in pixels
        lg: 100, // number in pixels
        xl: 100, // number in pixels
      },
      font: {
        family: 'Lato', // string
        size: {
          title: 24, // number in pixels
          subTitle: 20, // number in pixels
          lg: 18, // number in pixels
          md: 13, // number in pixels
          sm: 10, // number in pixels
          input: 11, // number in pixels
        },
        leading: {
          title: 2.9, // number line height
          subTitle: 2.4, // number line height
          lg: 2.2, // number line height
          md: 1.8, // number line height
          sm: 1.2, // number line height
        },
      },
    };`}
                />
                <RenderCodeExample
                  component={`const componentThemeConfig = {
    inputStyles: {
      colors: {
        border: baseConfig.colors.borderGrey, // color string
        inputText: baseConfig.colors.darkerGrey, // color string
        placeholderText: baseConfig.colors.midGrey, // color string
        labelText: baseConfig.colors.labelGrey, // color string
        disabledText: baseConfig.colors.midGrey, // color string
        error: baseConfig.colors.error, // color string
        warning: baseConfig.colors.warning, // color string
        success: baseConfig.colors.success, // color string
        highlight: baseConfig.colors.secondary, // color string
        background: baseConfig.colors.background, // color string
        backgroundClear: 'transparent', // color string
        backgroundDisabled: baseConfig.colors.lightGrey, // color string
        iconInnactive: baseConfig.colors.lightGrey, // color string
        icon: baseConfig.colors.midGrey, // color string
        iconHover: baseConfig.colors.darkerGrey, // color string
      },
      fontSize: {
        validationText: baseConfig.font.size.sm, // number in pixels
        inputText: baseConfig.font.size.input, // number in pixels
        labelText: baseConfig.font.size.md, // number in pixels
      },
      spacing: { ...baseConfig.spacing },
      metrics: {
        borderRadius: baseConfig.borderRadius.sm, // number in pixels
      },
    },
    buttonStyles: {
      colors: {
        primaryBackground: baseConfig.colors.secondary, // color string
        primaryBackgroundHover: baseConfig.colors.secondaryDark, // color string
        primaryText: baseConfig.colors.background, // color string
        disabledBackground: baseConfig.colors.lightGrey, // color string
        disabledText: baseConfig.colors.borderGrey, // color string
        ghostBorder: baseConfig.colors.borderGrey, // color string
        ghostBorderHover: baseConfig.colors.midGrey, // color string
        ghostText: baseConfig.colors.borderGrey, // color string
        ghostTextHover: baseConfig.colors.midGrey, // color string
      },
      borderRadius: baseConfig.borderRadius.lg, // number in pixels
      boxShadow: (color) => \`0px 0px 0px 0px \${color}\`, // function(color)
      activeState: color =>  \`
        transform: translateY(0px);
        box-shadow: 0px 0px 0px 0px \${color};
      \`, // function(color)
    },
    uiStyles: {
      colors: {
        text: {
          default: baseConfig.colors.primary, // color string
          link: baseConfig.colors.secondary, // color string
          linkHover: baseConfig.colors.secondaryDark, // color string
          error: baseConfig.colors.error, // color string
          danger: baseConfig.colors.error, // color string
          warning: baseConfig.colors.warning, // color string
          success: baseConfig.colors.success, // color string
          info: baseConfig.colors.secondary, // color string
        },
        border: baseConfig.colors.borderGrey, // color string
        selection: {
          bg: baseConfig.colors.secondary, // color string
          fg: baseConfig.colors.background, // color string
        },
        loader: baseConfig.colors.secondary, // color string
        status: {
          info: baseConfig.colors.background, // color string
          error: baseConfig.colors.error, // color string
          danger: baseConfig.colors.error, // color string
          warning: baseConfig.colors.warning, // color string
          success: baseConfig.colors.success, // color string
        },
      },
      focusStyle: \`
        outline: none;
        border: 1px solid \${baseConfig.colors.secondary};
        \`, // cssString
      boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.1)', // cssString
      transitionAll: 'all 0.3s ease-in-out', // cssString
      transition: property => \`\${property} 0.2s ease-in-out\`, // function(property)
      iconStrokeWidth: 1.5, // number in pixels
    },
  }`}
                />
              </span>
            );
          },
          options,
        },
        {
          title: 'Theme Provider comonent',
          sectionFn: () => {
            return (
              <span>
                <Text tag="p" size={metrics.medium} block>
                  The ThemeProvider will need to wrap your whole application (or at least as high up in the tree as you need
                  theming)
                </Text>
                <RenderCodeExample
                  component={`<TaclThemeProvider baseThemeConfig={baseConfig} componentThemeConfig={componentThemeConfig}>
    <MyApp />
  </TaclThemeProvider>`}
                />
              </span>
            );
          },
          options,
        },
      ],
    },
  ],
});
storiesOf('Internal', module).addWithChapters('Storybook components', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => {
            return (
              <span>
                <Text tag="p" size={metrics.medium} block>
                  Components for internal documentation only.
                </Text>
              </span>
            );
          },
          options,
        },
        {
          title: 'Code Examples',
          sectionFn: () => {
            return (
              <span>
                <RenderCodeExample comment="whoa, code-example inception">
                  <RenderCodeExample
                    component="You can add a 'component' prop as a string or as a child component'"
                    comment="write something here to render a comment like below"
                  />
                </RenderCodeExample>
              </span>
            );
          },
          options,
        },
        {
          title: 'Badges',
          sectionFn: () => {
            return (
              <span>
                <Badge type="success" title="Accepted" />
                <Badge type="info" title="New" message="Added in v0.75 and will likely be subject to change" />
                <Badge type="warning" title="Deprecated" message="This component will be removed in v1.25" />
                <Badge type="warning" title="Deprecated feature" message="The state prop will be removed in v1.1" />
                <Badge type="error" title="Removed" message="No longer exported from TACL!! 🙃" />
                <RenderCodeExample>
                  <Badge type="warning" title="Deprecated" message="This component will be removed in v1.25" />
                </RenderCodeExample>
              </span>
            );
          },
          options,
        },
      ],
    },
  ],
});
