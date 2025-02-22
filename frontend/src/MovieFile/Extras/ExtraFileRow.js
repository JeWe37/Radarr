import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TableRowCell from 'Components/Table/Cells/TableRowCell';
import TableRow from 'Components/Table/TableRow';
import titleCase from 'Utilities/String/titleCase';
import SubtitleFilePopover from './SubtitleFilePopover';
import styles from './ExtraFileRow.css';

class ExtraFileRow extends Component {

  //
  // Render

  render() {
    const {
      relativePath,
      extension,
      type,
      title,
      languageTags
    } = this.props;

    return (
      <TableRow>
        <TableRowCell
          className={styles.relativePath}
          title={relativePath}
        >
          {relativePath}
        </TableRowCell>

        <TableRowCell
          className={styles.extension}
          title={extension}
        >
          {extension}
        </TableRowCell>

        <TableRowCell
          className={styles.type}
          title={type}
        >
          {titleCase(type)}
        </TableRowCell>

        <TableRowCell className={styles.actions}>
          {
            type === 'subtitle' && (languageTags.length !== 0 || title != null) ?
              <SubtitleFilePopover title={title} languageTags={languageTags} /> :
              null
          }
        </TableRowCell>
      </TableRow>
    );
  }

}

ExtraFileRow.propTypes = {
  id: PropTypes.number.isRequired,
  extension: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  relativePath: PropTypes.string.isRequired,
  title: PropTypes.string,
  languageTags: PropTypes.arrayOf(PropTypes.string)
};

export default ExtraFileRow;
