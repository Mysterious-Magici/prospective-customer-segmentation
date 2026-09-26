import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
  return (
    <>
    <div className="pb-16 pt-6 h-[90vh] gap-10 flex justify-between items-center flex-row">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  </>
  );
}

export default Page1Content