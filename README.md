#Alternate Syntax in Angular 2

##Introduction
We often use data binding and event binding in Angular 2.
Two way binding is essential for form handling. We also use 
local variables time to time. There are two different syntax patterns to achieve all these,
one is notation based regular syntax and the other is text based canonical syntax. 
Let we look into them one by one with code samples.

##Data binding
Data binding is used for situations such as property, attribute, class, style
bindings. 

In the sample code bellow, the `hidden` property of the DOM object associated with the div
element is bound to the `hidden` property of the component.

```typescript
<div [hidden] = 'hidden'> Hide & Show </div>
```

The above code uses the square bracket syntax. But there is an 
alternate syntax for the above code which is shown bellow:

```typescript
 <div bind-hidden = 'hidden'> Hide & Show </div>
```

##Event binding
Event binding binds the specific event to the action method in the component.

In the sample code bellow, the click event is bound to the `toggleVisibility()`
method in the component.

```typescript
<button (click) = 'toggleVisibility()'> {{hidden ? 'Show' : 'Hide'}} </button>
```

The above code uses the syntax with parenthesis for event binding. But there is an 
alternate syntax for the above code which is shown bellow:

```typescript
  <button on-click = 'toggleVisibility()'> {{hidden ? 'Show' : 'Hide'}} </button>
```
##Two way binding
In two way binding we use `NgModel` directive to bind, for example, the input value to component
property and the component property back to the input value.

The code sample bellow is an example of the above described two way binding:

```typescript
<input [(ngModel)] = 'name'>
```
But there is an alternate canonical syntax for the two way binding in Angular 2 as shown bellow:

```typescript
 <input bindon-ngModel = 'name'>
 ```
##Local variable
Local variables are used prefixed with `#` notation in Angular 2, they provide the instance of the 
element they are used within. For example the following code snippet shows how the entered value of 
the input element is extracted and provided to the action method:

```typescript
<input #localVar >
  {{local}}
<button  (click) = 'handleLocal(localVar.value)'> Click </button>
```
But there is an alternate canonical syntax for the above code as shown bellow:

```typescript
 <input ref-localVar >
  {{local}}
  <button  on-click = 'handleLocal(localVar.value)'> Click </button>
 ```

##Which syntax is better?
There is no reason to choose between the notation based syntax and text based canonical syntax.
This is a matter of personal preference. But if you choose one syntax, stick with that for the whole project.
Never mix two syntaxes in one project, this may effect the readability of your codes.





