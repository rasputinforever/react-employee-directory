import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

function Employee({name, image}) {
    console.log(image)
    return (
        <GridListTile>
        <img src={image} alt={name} />
            <GridListTileBar
                subtitle={<span>by: {name}</span>}
                actionIcon={
                <IconButton aria-label={`info about ${name}`} className="">
                    <InfoIcon />
                </IconButton>
                }
            />
        </GridListTile>
    )
}

export default Employee
