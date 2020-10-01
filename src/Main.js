import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Filter,
  Operators,
  TextFilter,
  NumericFilter,
  DateFilter,
  BooleanFilter,
} from '@progress/kendo-react-data-tools';

import { filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { products } from './products.js';

class Main extends React.Component {
  state = {
    filter: {
      logic: 'and', filters: [
        { field: 'LegalEntityDisplay', operator: 'contains', value: "USA" },
        { field: 'LegalEntityName', operator: 'contains', value: "LE1" },
        { field: 'LegalEntityID', operator: 'contains', value: "1" },
        { field: 'LegalEntityCountry', operator: 'contains', value: "USA" },
        { field: 'LegalEntityCurrency', operator: 'contains', value: "USD" },
        { field: 'CID', operator: 'contains', value: "1" },

        {
          logic: 'or', filters: [
            { field: 'LegalEntityDisplay', operator: 'contains', value: "USA" },
            { field: 'LegalEntityName', operator: 'contains', value: "LE1" },
            { field: 'LegalEntityID', operator: 'contains', value: "1" },
            { field: 'LegalEntityCountry', operator: 'contains', value: "USA" },
            { field: 'LegalEntityCurrency', operator: 'contains', value: "USD" },
            { field: 'CID', operator: 'contains', value: "1" },
          ]
        }
      ]
    }
  };

  onFilterChange = (event) => {
    this.setState({ filter: event.filter });
  }

  render() {
    return (
      <React.Fragment>
        <Filter
          value={this.state.filter}
          onChange={this.onFilterChange}
          fields={[
            { name: "LegalEntityDisplay", label: 'LegalEntityDisplay', filter: TextFilter, operators: Operators.text },
            { name: "LegalEntityName", label: 'ProductName', filter: TextFilter, operators: Operators.text },
            { name: "LegalEntityID", label: 'LegalEntityID', filter: TextFilter, operators: Operators.text },
            { name: "LegalEntityCountry", label: 'LegalEntityCountry', filter: TextFilter, operators: Operators.text },
            { name: "LegalEntityCurrency", label: 'LegalEntityCurrency', filter: TextFilter, operators: Operators.text },
            { name: "CID", label: 'CID', filter: TextFilter, operators: Operators.text }
          ]}
        />
        <Grid style={{ maxHeight: '400px' }}


          data={filterBy(products, this.state.filter)}
        >
          <GridColumn field="CID" title="ID" />
          <GridColumn field="LegalEntityName" title="Name" />
          <GridColumn field="LegalEntityCountry" title="Country" />
        </Grid>
      </React.Fragment>
    );
  }
}

export default Main;