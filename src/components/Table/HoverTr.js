import React, {Component} from 'react'
import propTypes from 'prop-types'

class Tr extends Component {

    state = {
        hover: false,
    };

    handleMouseEnter() {
        this.setState({hover: true})
    }

    handleMouseLeave() {
        this.setState({hover: false})
    }

    render() {
        let hovered = {
            backgroundColor: this.state.hover ? '#7bc0fd' : '#FFFFFF',
            transition: 'all .3s',
        };
        const {tItem, columns} = this.props;
        return (
            <tr style={hovered} onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>
                {
                    columns.map((cItem) => (
                            <td key={cItem.dataIndex + cItem.key}>{
                                tItem[cItem.dataIndex] ?
                                    (cItem.render ? cItem.render(tItem[cItem.dataIndex]) : tItem[cItem.dataIndex])
                                    : cItem.render(tItem[cItem.dataIndex], tItem)
                            }</td>
                        )
                    )
                }
            </tr>
        )
    }
}

export default Tr;
