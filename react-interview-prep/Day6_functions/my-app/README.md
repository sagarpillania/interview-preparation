It is about the functions which we have done in the js already.

## HOOKS:-
 #.State is a current moment of a particular/individaul element. if their is change in the element -value,property thn we say its state changed. For this we use the "useState". changing the values.

 #.useEffect:- main function ke side by side dusra process chalana hai like calling api while our main thing is getting executed,koi component ko mount and unmount krna hia udhr kaam ayega, dom manipulation, event listener.

 #.useRef:- kisi bi dom element ko select krne ka kaam kta hai. we shouldnt do document.querySelector because not good practice though we can do it but refrain yourself. So, react will help here using useRef. by refrence.

 #.useContext:- to manage Global context. we are sending data from app to comp1 to comp2. but here we will put all data in global context and any component can use the data with help of useContext/context API. kind of advanced version of useState.

 #.useReducer:- to handle complex changes. kind of advanced version of useContext. it is used to keep track if user is logged in or not etc. chota version of redux
 
 #.useMemo:- use for memoization to stop things re rendering again and again
 #.useCallback:- use for optimization. unnecessary re renders ko avoid krna


