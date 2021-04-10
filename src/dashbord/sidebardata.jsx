import React from "react";
// import ImageIcon from '@material-ui/icons/Image';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';


export const sidebardata = [
   
    {
        title:"Certificate",
        icon:<CardMembershipIcon />,
        link:"/certificate"
    },
    {
        title:"Donate",
        icon:<CardGiftcardIcon />,
        link:"/donate"
    },
    {
        title:"Volunteer",
        icon:<ThumbsUpDownIcon />,
        link:"/volunteers"
    },
    {
        title:"FAQ",
        icon:<LiveHelpIcon />,
        link:"/faqs"
    }
    
]