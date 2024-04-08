fetch("https://unsplash.com/photos/silhouette-of-trees-during-sunset-NQWaAFoPhPY")
    .then(res => res.json() )
    .then(data => {
        document.body.style.background = `url(${data.urls.full})`
    })