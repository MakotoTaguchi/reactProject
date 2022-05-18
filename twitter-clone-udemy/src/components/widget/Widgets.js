import { Search } from "@mui/icons-material";
import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
      </div>
    </div>
  );
}

export default Widgets;
