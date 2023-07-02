import React from "react";

export const Toolbar = ({items}) => {
  const arrOut = [];
  let key = 1;
  items.arrFilters.forEach(item => {
    let nameClass = 'toolbar-btn'
    if (items.selected === item) {
        nameClass = 'toolbar-btn btn-active'
    }
    arrOut.push(<div onClick={items.onSelectFilter} className={nameClass} key={'tool_' + key}>{item}</div>);
    key += 1;
  })

  return (
    <>{arrOut}</>
  )
}
