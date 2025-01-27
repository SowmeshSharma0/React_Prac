1. Pokemon cards gallery app built
2. Slot machine exercise to practice prop passing
3. Rental properties exercise to practice prop passing
4. useState hook learnt and built random color picker exercise (Color box containing 25 divs, each with own state using useState)
5. Created multi Counter app using components, props, hooks, arrays of complex objects and array of states
    * C1: MultiCounter State management using useState
    * C2: created different file for list ele, passing setState as prop
    * C3: multi counter with complex object mapping and setStates
6. Crud App of adding and deleting inventory items using a form.
      * AddItemForm takes 3 inputs : name, qty, price and generates a custom id using uuid and adds this to an array of objects.
      * The addition/setstate change is done in a parent widget via a callback.
      * deletion of each list element is also done via a callback
      * Display of elements of the array of objects via a map
      * Decomposition of components done properly
      * Neat UI
7. password generator uses around 4 hooks
   1. Single div flexbox which contains a h1, password inpout field, copy btn and (length, hasNum, hasSpecialCharacter options which is a seperate component)
   2. 4 states: password, length, hasNumber, hasSpecialCharacter
   3. useCallback used for length, hasNum, hasSpecialCharacter passed to useCallback
   4. useEffect used to generate passwords on any length, hasNum, hasSpecialChar changes
   5. useRef used to highlight and copy password to clipboard.
8. Project Overview: Currency converter web app using React, allowing real-time currency conversion between different currencies.
   * State Management: Used multiple states (FromVal, ToVal, FromCurrency, ToCurrency, Options) to track user inputs, selected currencies, and exchange rates.
   * Hooks Utilized:
     * useState for state management
     * useEffect for side effects like data fetching
     * Custom useOptions hook for modular currency data retrieval
   
   * Learning Objectives:
     * React state and prop handling
     * Asynchronous data fetching
     * Custom hook creation
     * Event handling in React components

   * Key Challenges:
     * Synchronizing currency selection
     * Managing dynamic exchange rate calculations
     * Implementing clean, modular component architecture
9. Basic design made : a simple panel of cards with some design and css
   * toggling done on the basis of prop drilling and propogating states : on pressing toggle button can toggle between night mode and day mode
   * theme context added : no more prop drilling. Direct access thru context api aka dependency injection
