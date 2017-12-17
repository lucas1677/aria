import React, {Component} from 'react'
import propTypes from 'prop-types'
import Tr from './HoverTr'

class Table extends Component {

    static defaultProps = {};

    static propTypes = {
        tableData: propTypes.array,
        columns: propTypes.array,
    };

    render() {

        const {columns, tableData} = this.props;

        return (
            <table>
                <thead>
                <tr>
                    {columns.map((item) => (<th key={item.key}>{item.title}</th>))}
                </tr>
                </thead>
                <tbody>
                {
                    tableData.map((tItem) => (
                        <Tr key={tItem.key} tItem={tItem} columns={columns} >
                            {/*{*/}
                                {/*columns.map((cItem) => (*/}
                                        {/*<td key={cItem.dataIndex + tItem.key} >{*/}
                                            {/*tItem[cItem.dataIndex] ?*/}
                                                {/*(cItem.render ? cItem.render(tItem[cItem.dataIndex]) : tItem[cItem.dataIndex])*/}
                                                {/*: cItem.render(tItem[cItem.dataIndex], tItem)*/}
                                        {/*}</td>*/}
                                    {/*)*/}
                                {/*)*/}
                            {/*}*/}
                        </Tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}

export default Table;


// {
//     tableData.map((tItem) => (
//         <tr key={tItem.key} >
//             {
//                 columns.map((cItem) => (
//                         <td key={cItem.dataIndex + tItem.key} >{
//                             tItem[cItem.dataIndex] ?
//                                 (cItem.render ? cItem.render(tItem[cItem.dataIndex]) : tItem[cItem.dataIndex])
//                                 : cItem.render(tItem[cItem.dataIndex], tItem)
//                         }</td>
//                     )
//                 )
//             }
//         </tr>
//     ))
// }