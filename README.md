Project Video Link: https://drive.google.com/file/d/1Saf_jXDZyyae57hhhGlY8Cg3tAXIEGJ6/view?usp=sharing

==================== Project Description ====================

![Screenshot 2024-07-06 095750](https://github.com/jay-228/React-Redux_Builder/assets/122542095/32ed0869-17ce-49a2-9dc8-4a12ac2ffc6b)

![Screenshot 2024-07-06 095802](https://github.com/jay-228/React-Redux_Builder/assets/122542095/ab7b2146-4d79-489e-8700-ad97e79aee32)



## **Installation**

- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install 

// run locally
npm run start

```

- use redux to create a store and write in the following files
    - action.js ( action object creators )
    - counterReducer.js ( reducer function for Counter)
    - themeReducer.js (reducer function for Theme)
    - store.js ( store )
    - Use combineReducers to combine both themeReducer and counterReducer in the store.
- Create these components
- Counter.jsx
- CounterValue.jsx ( contains the counter value, retrieve it from store using useSelector hook ).
- CounterButtons.jsx
    - should have two buttons
        - one button with `ADD` text
            - onclicking `ADD` button an action should be dispatched to `handleAdd` function, with payload as 1
        - another button with `REDUCE` text
            - onclicking `ADD` button an action should be dispatched to `handleReduce` function, with payload as 1
- Theme.jsx
    - it should have two buttons , the deafult theme should be light
    - one button with `Switch to Light` text
        - by default the theme should be 'light' and the button should be disabled
        - in light theme the counter should receive classname `light_theme` which will have the text color as black and background-color as white
        - onclicking the button an action should be dispatched to `handleTheme` with payload as `light`
    - another button with `Switch to Dark` text
        - initilay this button should be enabled
        - in dark theme the counter should receive classname `dark_theme` which will have the text color as white and background-color as black
        - onclicking the button an action should be dispatched to `handleTheme` with payload as `dark`

### **Light Mode**

!https://i.imgur.com/EMPhNnJ.png

### **Dark mode**
