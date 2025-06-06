/*! Bootstrap 5 styling wrapper for ColumnControl
 * © SpryMedia Ltd - datatables.net/license
 */

import jQuery from 'jquery';
import DataTable from 'datatables.net-bs5';
import ColumnControl from 'datatables.net-columncontrol';

// Allow reassignment of the $ variable
let $ = jQuery;


DataTable.ColumnControl.content.dropdown.classes.container = [
	'dtcc-dropdown',
	'dropdown-menu',
	'show'
];

DataTable.ColumnControl.CheckList.classes.input = [
	'dtcc-list-search',
	'form-control',
	'form-control-sm'
];
DataTable.ColumnControl.SearchInput.classes.input = ['form-control', 'form-control-sm'];
DataTable.ColumnControl.SearchInput.classes.select = ['form-select', 'form-select-sm'];


export default DataTable;
