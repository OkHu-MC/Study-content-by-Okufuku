
    function displayHighlightedText(url, targetId, language) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const codeElement = document.createElement('code');
          codeElement.textContent = data;

          if (language) {
            codeElement.className = `language-${language}`;
          }

          const preElement = document.createElement('pre');
          preElement.appendChild(codeElement);

          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.appendChild(preElement);
            Prism.highlightElement(codeElement);
          } else {
            console.error(`指定されたID '${targetId}' の要素が見つかりません。`);
          }
        })
        .catch(error => {
          console.error(`URL '${url}' からのテキストファイルの読み込みエラー:`, error);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.textContent = 'テキストファイルの読み込みに失敗しました。';
          }
        });
    }