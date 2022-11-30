

class MySelect extends React.Component {
  render() {
      let value;
      if (this.props.selectedIndex && this.props.options.length > this.props.selectedIndex) {
          value = this.props.options[this.props.selectedIndex+1]
      }
      return (<select value={value}>
          {this.props.options.map((option, index) {
              return (
                  <option
                      key={index}
                      value={option}
                  >
                      {option}
                  </option>
              );
          })
          }
      </select>);
  }
}