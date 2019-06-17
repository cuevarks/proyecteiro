# **WEB DEV. NOTES**

## **JS Stuff**

```js
justanexample.classList.add("randomatribute"); //Modifing CSS clases with vainilla. / add / deleting / toggle are posible.

anspecialexample.forEach(ElementOfTheArray_Affected =>
  ElementOfTheArray_Affected.someaction(parameters)
); //Function that affects every element
```

## **CSS Stuff**

- Usually header's background it's named **_hero_**

```css
/* Where 6 could be any number representing some percent of the viewport height */
.imarandomclass {
  height: 6vh;
}
```

```css
/* Background size and cover attributes */
.imarandomclass {
  background-size: cover;
  background-position: top;
}
```

```
cover => tells the browser to make sure the image always covers the entire container, even if it has to stretch the image or cut a little bit off one of the edges. contain, on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.

top => Makes sure that the top of the background stays on the top of container.
```
