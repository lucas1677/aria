// @flow
import React, {Component} from 'react'
import propTypes from 'prop-types'
import reactCSS,{hover} from 'reactcss';

class Card extends Component {

    static defaultProps = {};

    static propTypes = {
        children: propTypes.node,
        title: propTypes.string,
        extra: propTypes.node,
    };

    render () {

        const {children, title, extra} = this.props;

        const styles = reactCSS({
            'default': {
                headLeft: {
                    borderBottom: '1px solid #ccc',
                    height: '48px',
                    lineHeight: '48px'
                },
                headRight: {
                    position: 'absolute',
                    right: '24px',
                    top: '14px',
                },
                cardBorder: {
                    display: 'inline-block',
                    position: 'relative',
                    width: '300px',
                    border: '1px solid #eee',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fff'
                },
                h: {
                    display: 'inline-block',
                    margin: 0,
                    padding: 0,
                }
            },
            'hover': {
                cardBorder: {
                    border: '1px solid transparent',
                    boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.3)',
                },
            }
        }, this.props, this.state);

        return (
            <div style={styles.cardBorder}>
                <div style={styles.headLeft}>
                    <h3 style={styles.h}>{title}</h3>
                </div>
                <div style={styles.headRight}>
                    {extra}
                </div>
                {children}
            </div>
        )
    }
}

export default hover(Card);