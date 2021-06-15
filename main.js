const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.querySelector(".incomplete-list").removeChild(target);
};

// 未完了リストに追加する
const addIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // spanタグ生成
  const span = document.createElement("span");
  span.textContent = text;

  // button(完了)タグ生成
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "完了";
  completeBtn.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeBtn.parentNode);

    // 完了リストに追加する要素
    const completeTarget = completeBtn.parentNode;

    // 完了した要素のテキストを取得
    const text = completeTarget.firstElementChild.textContent;

    // li以下を初期化
    completeTarget.textContent = "";

    // spanタグを生成
    const span = document.createElement("span");
    span.textContent = text;

    // buttonタグ生成
    const backBtn = document.createElement("button");
    backBtn.textContent = "戻す";
    backBtn.addEventListener("click", () => {
      document.querySelector(".complete-list").removeChild(backBtn.parentNode);

      const text = backBtn.parentElement.firstChild.textContent;
      addIncompleteList(text);
    });

    // spanタグの子要素に各要素を設定
    completeTarget.appendChild(span);
    completeTarget.appendChild(backBtn);

    document.querySelector(".complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ生成
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.querySelector(".incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
// addEventListener("click", onClickAdd) と同じ意味
