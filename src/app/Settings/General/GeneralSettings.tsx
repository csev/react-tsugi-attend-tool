import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

export default class  GeneralSettings extends React.Component {

 // https://stackoverflow.com/questions/38742334/what-is-right-way-to-do-api-call-in-react-js

 constructor(props) {
    super(props);

    this.state = {person: []};

  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    // $.getJSON('https://randomuser.me/api/')
      // .then(({ results }) => this.setState({ person: results }));

    console.log('UserList');
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {console.log(data); this.setState({ person: data.results });} );


  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div key={item.email}>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
        <PageSection>
            <Title headingLevel="h1" size="lg">
            General Settings Page Title
            </Title>
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
        </PageSection>
    );
  }
};

export { GeneralSettings };
