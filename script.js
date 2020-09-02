const InitObj=(()=>{
  //yahi pe load hoga db se
  //thread dat"a receive karega db se
  console.log("working");
  let data={
    Tree:{
      id:0,
      name:"",
      parent:{},
      children:{},
      upvotes:0,
      comments:0
    },
    parent:[],
    thread:function(id,name,par){
      //constructor for threads
      this.id=id;
      this.name=name;
      this.parent=par;
      this.upvotes=0;
      this.children={};
      this.comments=0;
    }

  }
  return data;
  
})();
//console.log(InitObj);
const LoadDataFromDB=((InitObj)=>{
  //root database mein se fetch hoga
  let root={
    id:10001,
    name:"DP",
    parent:-1,
    upvotes:10000,
    comments:2500,
    children:{
      childlist:[{
        id:10012,
        name:'Knapsack',
        parent:10001,
        upvotes:1002,
        comments:250,
        children:{
          childlist:[],
          size:0
        }
      },
      {
        id:10013,
        name:'Staircase',
        parent:10001,
        upvotes:1002,
        comments:250,
        children:{
          childlist:[],
          size:0
        }
      }
      ]
    }
  };
  InitObj.Tree=root;
  //console.log(root.children.childlist);
  
})(InitObj);