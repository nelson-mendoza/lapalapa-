#!/bin/bash
set -e

OUTPUT="palapa-dump.md"
PD="/mnt/compartida/palapa"

add() { echo "$1" >> "$OUTPUT"; }

detect_lang() {
  local f="$1"
  case "$f" in
    *.html|*.htm)  echo "html" ;;
    *.css)         echo "css" ;;
    *.js)          echo "javascript" ;;
    *.json)        echo "json" ;;
    *.xml)         echo "xml" ;;
    *.txt|*.md)    echo "text" ;;
    *.typ)         echo "typst" ;;
    *.sh)          echo "bash" ;;
    *.yml|*.yaml)  echo "yaml" ;;
    *)             echo "" ;;
  esac
}

dump_file() {
  local title="$1" fpath="$2" lang="$3"
  local lines; lines=$(wc -l < "$fpath")
  add ""
  add "---"
  add ""
  add "## \`$title\`"
  add ""
  add "**Ruta:** \`$fpath\` — **Líneas:** $lines"
  add ""
  add '```'"$lang"
  cat "$fpath" >> "$OUTPUT"
  add ""
  add '```'
  add ""
}

{
  echo "# 🌴 La Palapa — Cacahoatán, Chiapas"
  echo ""
  echo "---"
  echo ""
  echo "**Generado:** $(date '+%Y-%m-%d %H:%M:%S')"
  echo ""
  echo "---"
  echo ""
} > "$OUTPUT"

dump_file "index.html" "$PD/index.html" "html"
dump_file "css/style.css" "$PD/css/style.css" "css"
dump_file "js/app.js" "$PD/js/app.js" "javascript"

echo ""
echo "✅ Dump generado: $OUTPUT ($(wc -l < "$OUTPUT") líneas)"
