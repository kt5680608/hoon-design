# Basic Usage

```javascript
import { Button, Checkbox, Text, Modal, Popover } from 'hoondesign';

function App() {
  const ModalContent = () => {
    return (
      <div>
        <p>hello world!</p>
      </div>
    );
  };
  return (
    <div className="App">
      <Button>Click me!</Button>
      <Checkbox> This is checkbox!</Checkbox>
      <Text>Lorem ipsum</Text>
      <Modal content={<ModalContent />} title="modal" buttonText="open modal" />
      <Popover content="check your notification" />
    </div>
  );
}

export default App;
```

# API

## Installation

```javascript
npm install hoondesign
```

#

## Button Props

<img src = "https://velog.velcdn.com/images/kt5680608/post/63eef452-70b0-4f01-ba36-145796d10292/image.png" width = "100%"/>

| props           |  Type  |      Example       | Default |
| :-------------- | :----: | :----------------: | ------: |
| color           | string | 'white', '#ffffff' | `white` |
| backgroundColor | string | 'black', '#000000' | `black` |

> Hover color is applied automatically.

#

## Box Props

| props          |                                              Type                                              |       Default |
| :------------- | :--------------------------------------------------------------------------------------------: | ------------: |
| flexDirection  |                                         'row', 'column                                         |         `row` |
| justifyContent |      "center", 'space-between', 'space-around', 'space-evenly', 'flex-end', 'flex-start'       |      `center` |
| alignItems     | "center", 'space-between', 'space-around', 'space-evenly', 'flex-end', 'flex-start',"flex-end" |      `center` |
| width          |                                             number                                             | content-width |

#

## Checkbox Props

<img src = "https://velog.velcdn.com/images/kt5680608/post/317790aa-90e3-4243-a185-3a6759b0d384/image.png" width = "100%"/>

| props           |       Type       |      Example       | Default |
| :-------------- | :--------------: | :----------------: | ------: |
| borderColor     |      string      | 'black', '#000000' | `black` |
| backgroundColor |      string      | 'black', '#000000' | `black` |
| size            | 'sm', 'md', 'lg' |        'md'        |    `md` |

#

## Text Props

<img src = "https://velog.velcdn.com/images/kt5680608/post/7b901786-4c12-4d47-8d1d-e8452b18e10d/image.png" width = "100%"/>

| props      |      Type       |      Example       | Default |
| :--------- | :-------------: | :----------------: | ------: |
| fontWeight | 'normal', 'bold |      'normal'      | `black` |
| color      |     string      | 'black', '#000000' | `black` |
| size       |     number      |         16         |      16 |

#

## Modal Props

<img src = "https://velog.velcdn.com/images/kt5680608/post/da95b812-3dc8-49ac-8b43-5c46ffc88453/image.png">

| props            |   Type    |            Example             | Default |
| :--------------- | :-------: | :----------------------------: | ------: |
| buttonText       |  string   |             'open'             |  'open' |
| title            |  string   |          'your title'          |       - |
| content          | reactNode | <div><p>your content</p></div> |      16 |
| modalCloseButton |  boolean  |              true              |    true |

#

## Popover Props

<img src = "https://velog.velcdn.com/images/kt5680608/post/547f550b-e5e9-416e-a105-ed9c225ddb69/image.png">

| props   |  Type  |    Example     | Default |
| :------ | :----: | :------------: | ------: |
| content | string | 'your content' |     `-` |
