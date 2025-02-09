document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const hint = document.getElementById('hint');
  
  // 搜索引擎配置
  const searchEngines = {
    baidu: {
      name: '百度',
      url: 'https://www.baidu.com/s?wd=',
      hint: '按回车键执行百度搜索，按快捷键重置'
    },
    google: {
      name: 'Google',
      url: 'https://www.google.com/search?q=',
      hint: '按回车键执行 Google 搜索，按快捷键重置'
    },
    bing: {
      name: 'Bing',
      url: 'https://www.cn.bing.com/search?q=',
      hint: '按回车键执行 Bing 搜索，按快捷键重置'
    }
  };

  // 默认搜索引擎
  const defaultEngine = searchEngines.bing;
  let currentEngine = null;
  let isWaitingForQuery = false;

  // 重置输入框状态
  function resetInput() {
    isWaitingForQuery = false;
    currentEngine = null;
    hint.style.display = 'none';
    searchInput.value = '';
    searchInput.placeholder = `输入搜索内容或搜索引擎 (baidu/google/bing)`;
  }

  // 执行搜索
  function executeSearch(query) {
    if (!query.trim()) return;
    query = query.trim();

    // 如果输入的是URL，直接打开
    if (isValidUrl(query)) {
        chrome.tabs.create({ url: query });
        window.close();
        return;
    }
    
    const engine = currentEngine || defaultEngine;
    const searchUrl = engine.url + encodeURIComponent(query);
    chrome.tabs.create({ url: searchUrl });
    window.close();
  }

  function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
  // 监听快捷键重置
  chrome.commands.onCommand.addListener(function(command) {
    if (command === '_execute_action' && isWaitingForQuery) {
      resetInput();
      searchInput.focus();
    }
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && !isWaitingForQuery) {
      e.preventDefault();
      const command = searchInput.value.toLowerCase().trim();
      
      if (searchEngines[command]) {
        currentEngine = searchEngines[command];
        isWaitingForQuery = true;
        searchInput.value = '';
        searchInput.placeholder = '请输入检索内容';
        hint.textContent = currentEngine.hint;
        hint.style.display = 'block';
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const input = searchInput.value.trim().toLowerCase();
      
      // 如果已经选择了搜索引擎或输入的不是搜索引擎命令，直接搜索
      if (isWaitingForQuery || !searchEngines[input]) {
        executeSearch(searchInput.value);
      } else if (searchEngines[input]) {
        // 如果输入的是搜索引擎命令，切换到该搜索引擎
        currentEngine = searchEngines[input];
        isWaitingForQuery = true;
        searchInput.value = '';
        searchInput.placeholder = '请输入检索内容';
        hint.textContent = currentEngine.hint;
        hint.style.display = 'block';
      }
    } else if (e.key === 'Escape') {
      if (isWaitingForQuery) {
        resetInput();
      } else {
        window.close();
      }
    }
  });

  // 输入时更新提示
  searchInput.addEventListener('input', function() {
    if (!isWaitingForQuery) {
      const command = searchInput.value.toLowerCase().trim();
      if (searchEngines[command]) {
        hint.textContent = '按 Tab 键或回车键选择搜索引擎';
        hint.style.display = 'block';
      } else {
        hint.textContent = `使用 ${defaultEngine.name} 搜索，按回车键执行`;
        hint.style.display = 'block';
      }
    }
  });

  // 初始化
  resetInput();
}); 