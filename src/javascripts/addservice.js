import React, { Component} from 'react'
import 'stylesheets/modules/addservice'


class AddService extends Component {
    constructor(props, context){
        super(props, context)
        this.updateTitle = this.updateTitle.bind(this)
        this.updateProject = this.updateProject.bind(this)
        this.updatePrivate = this.updatePrivate.bind(this)
        this.updateProjectContributor = this.updateProjectContributor.bind(this)
        this.updateTaskType = this.updateTaskType.bind(this)
        this.updatePriority = this.updatePriority.bind(this)
        this.updateStartDate = this.updateStartDate.bind(this)
        this.updateEndDate = this.updateEndDate.bind(this)
        this.updateAdditionalInfo = this.updateAdditionalInfo.bind(this)
        this.submitService = this.submitService.bind(this)
        this.state = {
            /*message: '',
            messages: []*/
            title: '',
            project: '',
            private:'',
            projectcontributor:'',
            tasktype:'',
            prioroty:'',
            startdate:'',
            enddate:'',
            additionalinfo:'',
            services: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        firebase.database().ref('services/').on('value',(snapshot)=> {

            const currentServices = snapshot.val()

            if (currentServices != null){
                this.setState({
                    services: currentServices
                })
            }
        })
    }

   /* updateMessage(event){
        console.log('updateMessage: '+event.target.value)
        this.setState({
            message: event.target.value
        })
    }*/
    updateTitle(event){
        this.setState({
            title: event.target.value
        })
    }
    updateProject(event){
        this.setState({
            project: event.target.value
        })
    }    
    updatePrivate(event){
    this.setState({
    private: event.target.value
        })
    }    
    updateProjectContributor(event){
    this.setState({
    projectcontributor: event.target.value
        })
    }    
    updateTaskType(event){
    this.setState({
    tasktype: event.target.value
        })
    }    
    updatePriority(event){
    this.setState({
    priority: event.target.value
        })
    }    
    updateStartDate(event){
    this.setState({
    startdate: event.target.value
        })
    }    
    updateEndDate(event){
    this.setState({
    enddate: event.target.value
        })
    }    
    updateAdditionalInfo(event){
    this.setState({
    additionalinfo: event.target.value
        })
    }

    /*submitMessage(event){
        console.log('submitMessage: '+this.state.message)
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }*/
        submitService(event){
        const nextService = {
            id: this.state.services.length,
            title: this.state.title,
            project:this.state.project,
            private:this.state.private,
            projectcontributor:this.state.projectcontributor,
            tasktype:this.state.tasktype,
            prioroty:this.state.priority,
            startdate:this.state.startdate,
            enddate:this.state.enddate,
            additionalinfo:this.state.additionalinfo
        }

        firebase.database().ref('services/'+nextService.id).set(nextService)

    }

  
    render() {
        const currentService = this.state.services.map((service, i) => {
            return (
                <li key={service.id}>
                {service.title}
                {service.project}
                {service.private}
                {service.projectcontributor}
                {service.tasktype}
                {service.priority}
                {service.startdate}
                {service.enddate}
                {service.additionalinfo}
                </li>
            )
        })

    
        return (                                                                          
 
                                             
<div className="page-new-task  ">
    <div id="container">
        <div className="content">
            <div className="container">
                                                
             <ol>
                {currentService}
             </ol>                                   
                <h1>New Task</h1>
                                    
                {/*<!--/ Start Add Task /-->*/}
				<div className="add-task">

                {/*<!--/ Start Form /-->*/}
				<form >

                                
                    {/*<!--/ Start Fleft /-->*/}
                    <div className="fleft">
                        <div className="section task-name ">
                            <label for="title">Task name</label>
                            <input onChange={this.updateTitle} type="text" id="title" name="title" className="text" maxlength="100" required />

                            <em id="title-chars" className="chars"></em>
                        </div>
                                                
                        <div className="section is-private">
                            <label for="private">Private                                                                       
							<input type="hidden" name="private" value="no" />
                            <input onChange={this.updatePrivate} type="checkbox" id="private" name="private" value="yes" />
                            </label>
                        </div>
                                                
                        <div className="section halves">
                            <div className="half-container">
                                <label for="cat">Project</label>
                                                                                                
                                <select onChange={this.updateProject} name="categoryID" id="categoryID" required>
												<option></option>
																																																				<option value="273">Aahari Corporate Services Pvt. Ltd</option>
																																																																																												<option value="48">Abhigyan Constructions Pvt Ltd</option>
																																																																																												<option value="295">Accuracy Info Labs Pvt Ltd</option>
																																																																																												<option value="84">Achieve Online Services Pvt Ltd</option>
                                                                                                                                                                                                             </select>
                                    </div>
                                                                                                                                
                                                                                                                                                                                                     <div className="half-container">
                                        <label for="project_contributor">Assign this task to:</label>
                                        <select onChange={this.updateProjectContributor} name="project_contributor" id="project_contributor">
                                            <option selected value="1" id="1">Nobody (info@openoidsoft.com)</option>
                                                                                                                                                                                                             <option  value="21" id="21">Asha Dantuluri (asha@datla.info)</option>
                                                                                                                                                                                                             <option  value="10" id="10">Ashok Reddy Kothinti (ashok@datla.info)</option>
                                                                                                                                                                                                         </select>
                                    </div>
                                                                                                                                                                                                 </div>
								<div className="section halves">
                         
                                    <div className="full-container task-type">    
                                               <label for="tagID">Task Type</label>
                                     
                                               <select onChange={this.updateTaskType} name='tagID' id='tagID' className='postform' >
													<option className="level-0" value="192">Accounting&nbsp;&nbsp;(28)</option>
													<option className="level-0" value="217">Admin Works ( DA)&nbsp;&nbsp;(0)</option>
												</select>

									</div>

								</div>
                                    <div className="section thirds priority-and-dates">
                                                                
                                        <div className="third-container priority">
                                            <label>Priority</label>
                                            <label className="radio new-task-priority-low"><input onChange={this.updatePriority} type="radio" name="priority" value="low" id="low"/>Low</label>
                                            <label className="radio new-task-priority-normal"><input onChange={this.updatePriority} type="radio" name="priority" value="normal" id="normal" checked/>Normal</label>
                                            <label className="radio new-task-priority-high"><input onChange={this.updatePriority} type="radio" name="priority" value="high" id="high"/>High</label>
                                            <label className="radio new-task-priority-urgent"><input onChange={this.updatePriority} type="radio" name="priority" value="urgent" id="urgent"/>Urgent</label>
                                        </div>
                                                                
                                        <div className="third-container start-date">
                                            <label>Start date</label>
                                            <input onChange={this.updateStartDate} type="text" className="text date" id="startdate" name="startdate" />
                                            <em className="clear-field clear-start-date-field">Clear</em>
                                        </div>
                                                                
                                        <div className="third-container end-date">
                                            <label>End date</label>
                                            <input onChange={this.updateEndDate} type="text" className="text date" id="duedate" name="duedate" />
                                            <em className="clear-field clear-end-date-field">Clear</em>
                                        </div>
                                    </div>
                                                                                
                                                                                
                                   <div className="half-container upload-attachment">
                                            <label>Attach files</label>
                                            <input type="file" name="tr_multiple_attachments[]"  multiple="multiple" />
                                   </div>
                                                                                                            
                                </div>
                         
    {/*<span className="cancel-task">&#215;</span>*/}
                                                
                             
                                {/*<!--/ End Fleft /-->*/}
                                
                                
                                {/*<!--/ Start Fright /-->*/}
                            <div className="fright">
                                <div className="section textarea-right">
                                    <span className="nbm full-width">
										<label for="minfo">Additional information</label>
										<textarea onChange={this.updateAdditionalInfo} name="minfo" id="minfo" className="text textarea" rows="10" cols="20"></textarea>
                                    </span>
                                                                
                                <div className="submit-button-container">
                                    <input onClick={this.submitService} type="submit" name="submit" className="button submit" value="Create Task" />
                                    {/*<button onClick={this.submitMessage}>Submit Message</button>-->*/}
                                    <img src="http://datla.info/task/wp-content/themes/taskrocket/images/loader.gif" />
                                </div>
                                                                
                            </div>
                        </div>
                                {/*End Fright /-->*/}

                            <input type="hidden" id="post_nonce_field" name="post_nonce_field" value="61024d001a" /><input type="hidden" name="_wp_http_referer" value="/task/new-task/" />
                            <input type="hidden" name="submitted" id="submitted" value="true" />
                            <input type="hidden" name="categorySlug" id="categorySlug" value="" />
							<input type="hidden" name="task-form-type" id="task-form-type" value="new-task-solo" />
							<input type="hidden" name="pm_email" id="pm_email" value="raju@openoidsoft.com" />
                            <input type="hidden" name="tr_status" id="tr_status" value="incomplete" />
                                
                                <span className="close-new-task-form"></span>
					</form>
								{/*<!--/ End Form /-->*/}
					</div>
								{/*<!--/ End Add Task /-->*/}                                     
                                                
				</div>
			</div>

			<div className="clear"></div>
		</div>

	</div>

    );
    }
}

export default AddService