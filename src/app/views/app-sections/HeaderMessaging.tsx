import { MessageBar, MessageBarType } from 'office-ui-fabric-react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LoginType } from '../../../types/enums';
import { Authentication } from '../authentication';
export function headerMessaging(loginType: LoginType, classes: any, query: string): React.ReactNode {
  return (
  <div style={{ marginBottom: 8 }}>
    {loginType === LoginType.Popup && <>
      <MessageBar messageBarType={MessageBarType.info} isMultiline={true}>
        <p>
          <FormattedMessage id='To try the full features' />,
          <a className={classes.links} tabIndex={0} href={query} target='_blank'>
            <FormattedMessage id='full Graph Explorer' />.
          </a>
        </p>
        <p>
          <FormattedMessage id='running the query' />.
        </p>
      </MessageBar>

      <Authentication />
    </>}
    {loginType === LoginType.Redirect && <MessageBar messageBarType={MessageBarType.warning} isMultiline={true}>
      <p>
        <FormattedMessage id='To try operations other than GET' />,

        <a className={classes.links} tabIndex={0} href={query} target='_blank'>
          <FormattedMessage id='sign in' />.
        </a>
      </p>
    </MessageBar>}
  </div>);
}