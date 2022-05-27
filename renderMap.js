
  render() {
    const project = () => {
      switch(this.projectName) {

        case "one":   return <ComponentA />;
        case "two":   return <ComponentB />;
        case "three": return <ComponentC />;
        case "four":  return <ComponentD />;

        default:      return <h1>No project match</h1>
      }
    }

    return (
      <div>{ project() }</div>
    )
  }