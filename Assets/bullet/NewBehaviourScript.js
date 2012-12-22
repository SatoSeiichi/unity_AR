#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(collisionInfo : Collision){
	if (collisionInfo.gameObject.tag == "AR"){
		Destroy(collisionInfo.gameObject);
	}
		Destroy(gameObject);
}