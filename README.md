# Install

```javascript
npm install hoondesign
```

<br/><br/>

# Demo Site

<a>https://hoondesign.netlify.app/</a>

<br/><br/>

# Box

### Usage

```javascript
import { Box } from 'hoonDesign';

function App() {
  <Box id="your-id">hello world!</Box>;
}
```

### Box props

| **name**        |                                      **type**                                       |         **default** |
| :-------------- | :---------------------------------------------------------------------------------: | ------------------: |
| id              |                                       string                                        |                none |
| children        |                                     React.Node                                      |                     |
| width           |                                       string                                        |              'auto' |
| height          |                                       string                                        |              'auto' |
| maxWidth        |                                       string                                        |              'auto' |
| maxHeight       |                                       string                                        |              'auto' |
| overflowX       |                        'visible', 'hidden', 'auto', 'scroll'                        |           'visible' |
| overflowY       |                        'visible', 'hidden', 'auto', 'scroll'                        |           'visible' |
| margin          |                                       string                                        |           '0 0 0 0' |
| padding         |                                       string                                        |           '0 0 0 0' |
| display         |                      'visible', 'none', 'flex', 'inline-flex'                       |           'visible' |
| justifyContent  | 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' |        'flex-start' |
| alignItems      | 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' |        'flex-start' |
| flexDirection   |                                   'row', 'column'                                   |               'row' |
| backgroundColor |                                       string                                        |             'white' |
| color           |                                       string                                        |             'black' |
| border          |                                       string                                        | 'medium none color' |
| borderRadius    |                                       string                                        |               '0px' |
| isAnimated      |                                       boolean                                       |               false |
| animatedY       |                                       string                                        |              '20px' |

<br/><br/>

# Text

### Usage

```javascript
import { Text } from 'hoondesign';

function App() {
  return <Text>Hello World!</Text>;
}
```

### Text Props

| **name**   |                                    **type**                                    | **default** |
| :--------- | :----------------------------------------------------------------------------: | ----------: |
| children   |                                   React.Node                                   |             |
| fontSize   | 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl' |        'md' |
| color      |                                     string                                     |     'black' |
| fontWeight |                                'normal', 'bold'                                |    'normal' |

<br/><br/>

# Heading

### Usage

```javascript
import { Heading } from 'hoondesign';

function App() {
  return <Heading fontSize="xl">Hello World!</Heading>;
}
```

### Heading Props

| **name** |                                    **type**                                    | **default** |
| :------- | :----------------------------------------------------------------------------: | ----------: |
| children |                                   React.Node                                   |             |
| fontSize | 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl' |        'md' |
| color    |                                     string                                     |     'black' |

<br/><br/>

# Flex

### Usage

```javascript
import { Box, Flex } from 'hoonDesign';

function App() {
  <Flex display="flex" justifyContent="center" alignItems="center">
    <Box id="your-id">hello world!</Box>
    <Box id="your-id2">hello world2!</Box>
    <Box id="your-id3">hello world3!</Box>
  </Flex>;
}
```

### Flex Props

| **name**       |                                      **type**                                       |  **default** |
| :------------- | :---------------------------------------------------------------------------------: | -----------: |
| children       |                                     React.Node                                      |              |
| width          |                                       string                                        |       'auto' |
| height         |                                       string                                        |       'auto' |
| maxWidth       |                                       string                                        |       'auto' |
| maxHeight      |                                       string                                        |       'auto' |
| overflowX      |                        'visible', 'hidden', 'auto', 'scroll'                        |    'visible' |
| overflowY      |                        'visible', 'hidden', 'auto', 'scroll'                        |    'visible' |
| margin         |                                       string                                        |    '0 0 0 0' |
| padding        |                                       string                                        |    '0 0 0 0' |
| justifyContent | 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' | 'flex-start' |
| alignItems     | 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' | 'flex-start' |
| flexDirection  |                                   'row', 'column'                                   |        'row' |
| gap            |                                       string                                        |   '0px 0px ' |

<br/><br/>

# Button

### Usage

```javascript
import { Button } from 'hoondesign';

function App() {
  return <Button>submit</Button>;
}
```

### Button Props

| **name**        |  **type**  | **default** |
| :-------------- | :--------: | ----------: |
| children        | React.Node |             |
| backgroundColor |   string   |     'black' |
| color           |   string   |     'white' |
| display         |  boolean   |        true |
| isAnimated      |  boolean   |        true |

<br/><br/>

# Popover

### Usage

```javascript
import { Popover } from 'hoondesign';

function App() {
  return <Popover>hello world!</Popover>;
}
```

### Popover Props

| **name**        |  **type**  | **default** |
| :-------------- | :--------: | ----------: |
| children        | React.Node |             |
| backgroundColor |   string   |     'black' |
| color           |   string   |     'white' |
| isAnimated      |  boolean   |        true |

<br/><br/>

# Modal

### Usage

```javascript
import { Modal } from 'hoondesign';

function App() {
  return <Modal title="title">hello world!</Modal>;
}
```

### Modal Props

| **name**         |  **type**  | **default** |
| :--------------- | :--------: | ----------: |
| children         | React.Node |             |
| title            |   string   |        none |
| buttonText       |   string   |      'open' |
| backgroundColor  |   string   |     'black' |
| modalCloseButton |  boolean   |        true |

<br/><br/>

# RollingText

### Usage

```javascript
import { RollingText } from 'hoondesign'

function App(){
	return (
    	<RollingText numberValue = {123876}>
    )
}
```

### RollingText Props

| **name**        |  **type**  | **default** |
| :-------------- | :--------: | ----------: |
| numberValue     |   number   |        none |
| unit            |   string   |        none |
| width           |   string   |     '100vw' |
| height          |   string   |     '100vh' |
| backgroundColor |   string   |     'black' |
| color           |   string   |     'white' |
| fontSize        | 'md', 'lg' |        'md' |

<br/><br/>

# Skeleton

### Usage

```javascript
import { Box, Skeleton } from 'hoondesign';

function App() {
  return (
    <Box display="flex" justifyContent="center" width="600px">
      <Skeleton type="rect" />
      <Skeleton type="rect" />
    </Box>
  );
}
```

### Skeleton Props

| **name** |    **type**     | **default** |
| :------- | :-------------: | ----------: |
| type     | 'rect, 'circle' |        none |
| width    |     string      |             |
| height   |     string      |      '30px' |
| diameter |     string      |      '60px' |
| margin   |     string      |   '0 0 0 0' |
| padding  |     string      |   '0 0 0 0' |
