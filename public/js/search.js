// Fetch the JSON index
fetch("/index.json")
  .then(response => response.json())
  .then(function(data) {
    const idx = lunr(function () {
      this.ref('href');
      this.field('title');
      this.field('content');
      this.field('tags');

      data.forEach(function (doc) {
        this.add(doc);
      }, this);
    });

    // Handle the search input
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('search-results');

    searchInput.addEventListener('input', function () {
      const query = searchInput.value;
      const results = idx.search(query);

      // Clear previous results
      resultsDiv.innerHTML = '';

      if (results.length > 0) {
        results.forEach(function (result) {
          const match = data.find(d => d.href === result.ref);
          const resultItem = `<div><a href="${match.href}">${match.title}</a></div>`;
          resultsDiv.innerHTML += resultItem;
        });
      } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
      }
    });
  });
