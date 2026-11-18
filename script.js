```javascript
(function increasePageViews() 
{
  let currentViews = 0; // Track views generated
  let totalViews = 10; // Adjust the number of views you want

  function simulatePageView() 
  {
    currentViews++;
    console.log('Simulated View ' + currentViews);

    if (currentViews < totalViews) 
    {
      setTimeout(simulatePageView, 5000); // 5 seconds delay between views
    } else 
    {
      console.log('Finished simulating ' + totalViews + ' views');
    }
  }

  simulatePageView();
})();
```
