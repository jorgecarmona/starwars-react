import Button from '@mui/material';

interface Props {
    color: string;
    children: React.ReactNode;
    onClick: () => void;
    variant: string;
}

function ENGButton(props: Props) {
    return (
        <ENGButton color={props.color} onClick={props.onClick} variant={props.variant}>
        {props.children}
        </ENGButton>
    );
}

export default ENGButton;