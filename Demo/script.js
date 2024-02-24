// Helper function to copy text to clipboard.
const copyToClipboard = e => { var o = document.createElement("input"); o.type = "text", o.value = e, document.body.appendChild(o), o.select(), document.execCommand("Copy"), document.body.removeChild(o) };

// Copy the HTML snippet on icon click.
const onIconClick = (event) => {
  let icon = event.target.closest('i[class^="tlgi-"]');
  if (!icon) icon = event.target.querySelector('i[class^="tlgi-"]');
  console.log(icon);
  copyToClipboard(icon.outerHTML);
  alert("Copied to clipboard!")
};

// Render every icon in the font file.
const renderIcons = (file) => {
  const createEl = (type, className) => {
    const $ = document.createElement(type);
    $.className = className;
    return $;
  };
  const icons = file.iconSets[0].icons;
  const $iconSet = document.getElementById('icon-set');
  icons.map((icon) => {
    const name = icon.tags[0];
    const $div = createEl("div", "icon-wrap");
    const $icon = createEl("i", `tlgi-${name}`);
    const $code = createEl("span", "icon-code");
    $code.innerText = name;
    $div.append($icon);
    $div.append($code);
    $div.addEventListener('click', onIconClick);
    $iconSet.append($div);
  });
};

// On page load, fetch the JSON file containing all the icon names and render them.
fetch('../TLG Icons.json')
  .then(response => response.json())
  .then(data => renderIcons(data))
  .catch(error => console.log(error));

// Handle the color picker.
const $colorPicker = document.querySelector('input[type="color"]');
$colorPicker.addEventListener("input", watchColorPicker, false);
$colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll(".icon-wrap").forEach((el) => {
    el.style.color = event.target.value;
  });
}