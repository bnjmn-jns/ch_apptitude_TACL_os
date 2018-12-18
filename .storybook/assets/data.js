import React from 'react';
import styled from 'styled-components';
import Text from '../../src/components/Text';

import theme from 'assets/theme';
import { colors, metrics } from './theme';

const TextBlock = styled.div`
  height: 60em;
  width: 200em;
  background-color: ${colors.secondary};
  padding: 2em;
`;

export const LoremIpsum = () => (
  <TextBlock>
    <Text tag="h2" color="white" size={metrics.title} message="Large Content example" />
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
    <Text color="white" block>
      {lorem}
    </Text>
  </TextBlock>
);

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus pellentesque erat eget
porttitor. Ut pharetra est nec nulla dapibus vestibulum. Vestibulum ante ipsum primis in faucibus orci
luctus et ultrices posuere cubilia Curae; Pellentesque sed nisi eget risus facilisis facilisis. Quisque
dignissim, lacus id mollis sodales, ex enim interdum lorem, id suscipit lorem elit quis lorem. Fusce
auctor lacinia hendrerit. Vivamus tempor faucibus dapibus. Duis rhoncus neque massa, fringilla mattis
tellus tincidunt et. Curabitur rutrum leo sed aliquet rutrum. Integer posuere risus id congue suscipit.
Etiam quis felis urna. Morbi eget posuere risus. Proin facilisis porta metus ac tincidunt. Mauris at est
aliquet, convallis lectus quis, tempus odio. Morbi pharetra, orci sed condimentum malesuada, sapien arcu
pharetra diam, eget vulputate risus ex quis enim. Integer odio nisl, elementum sed sodales et, iaculis
et ante. Aenean scelerisque leo non tempus tempor. Vivamus non gravida elit. Phasellus sit amet ante vel
massa volutpat accumsan. Sed sit amet tristique ex, cursus venenatis turpis. Etiam fringilla, felis at
ullamcorper commodo, elit lorem hendrerit tellus, convallis rhoncus purus nisi ut leo. Cras bibendum
gravida ipsum convallis congue. Maecenas ipsum urna, tempus at dapibus ut, dapibus id tellus. Vestibulum
consequat rhoncus lacus vitae hendrerit. Phasellus pharetra, massa non venenatis dapibus, urna nisl
dictum est, eget elementum est sem non lorem. Nullam venenatis, ante volutpat aliquam vulputate, justo
nulla venenatis massa, sit amet euismod libero velit eu libero. Proin posuere ultrices tortor, at
posuere orci aliquam id. Sed ac semper ante. Suspendisse purus libero, finibus at justo vitae,
ullamcorper pharetra tellus. Quisque aliquet bibendum ullamcorper. Nulla ornare arcu quis aliquam
iaculis. Mauris accumsan mauris neque, in porta erat vehicula a. Curabitur semper odio eu sem fermentum
accumsan. Mauris quis tellus consequat, accumsan nibh dapibus, vulputate purus. Donec at quam a leo
pretium facilisis sit amet eu ligula. Cras placerat rutrum ultricies. In nec nisl sed ligula luctus
lacinia. Nunc vel quam ut mauris maximus iaculis. Cras in facilisis elit, sed rhoncus libero. Nulla
facilisi. Vivamus auctor ipsum sit amet diam posuere suscipit quis quis libero. Nullam posuere elementum
sem nec pellentesque. Duis sodales sagittis vehicula. Nulla vel sapien id risus consectetur imperdiet.
Fusce sit amet felis laoreet, finibus ipsum et, varius nisl. Cras sit amet sollicitudin risus, id
tincidunt sem. Phasellus imperdiet fringilla dignissim. Sed porttitor, tortor pellentesque malesuada
pellentesque, leo quam lobortis magna, id porta mauris est id orci. Sed lacinia pharetra finibus.
Integer blandit in libero ut aliquam. Suspendisse id lacus vitae urna facilisis finibus sit amet nec
justo. Vestibulum dolor purus, ultrices at pretium ac, commodo et ipsum. Morbi ac neque id dolor tempor
maximus. Proin egestas rhoncus convallis. In nunc lorem, aliquet vitae ultrices a, porta quis justo.
Curabitur id nisi dui. Duis malesuada ornare erat vitae consequat. Curabitur egestas, magna ac pharetra
feugiat, libero nibh eleifend est, nec mollis erat nisl vitae lacus. Praesent ex sapien, pellentesque et
vulputate quis, pretium pulvinar nunc. Integer aliquet tortor non ipsum ornare, non semper justo rutrum.
Aliquam eget metus ac lacus varius scelerisque ac at dolor. Praesent est magna, porttitor eu magna in,
porttitor finibus mi. Nullam metus tortor, accumsan quis eleifend eu, porta semper magna. Nulla
facilisis hendrerit lectus vel posuere. Aliquam non arcu mi. Cras vitae gravida dui, vitae maximus orci.
Ut venenatis efficitur porta. Ut lacinia finibus magna, sit amet luctus ligula faucibus ac. Aenean
lacinia porta rhoncus. Ut quis convallis lectus, ac egestas mi.`;
