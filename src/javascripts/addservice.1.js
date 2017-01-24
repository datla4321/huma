import React, { Component} from 'react'
import 'stylesheets/modules/addservice'


class AddService extends Component {
    constructor(props, context){
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        firebase.database().ref('services/').on('value',(snapshot)=> {

            const currentMessages = snapshot.val()

            if (currentMessages != null){
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event){
        console.log('updateMessage: '+event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    submitMessage(event){
        console.log('submitMessage: '+this.state.message)
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        firebase.database().ref('services/'+nextMessage.id).set(nextMessage)

    }

  
    render() {
        /*const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}>{message.text}</li>
            )
        })*/

    
        return (                                                                          
 
                                             
<div className="page-new-task  ">
    <div id="container">
        <div className="content">
            <div className="container">
                                                
                                                
                <h1>New Task</h1>
                                    
                {/*<!--/ Start Add Task /-->*/}
				<div className="add-task">

                {/*<!--/ Start Form /-->*/}
				<form >

                                
                    {/*<!--/ Start Fleft /-->*/}
                    <div className="fleft">
                        <div className="section task-name ">
                            <label for="title">Task name</label>
                            <input type="text" id="title" name="title" className="text" maxlength="100" required />
                            <em id="title-chars" className="chars"></em>
                            </div>
                                                
                                <div className="section is-private">
                                    <label for="private">Private                                                                       
										<input type="hidden" name="private" value="no" />
                                        <input type="checkbox" id="private" name="private" value="yes" />
                                    </label>
                                </div>
                                                
                                <div className="section halves">
                                    <div className="half-container">
                                        <label for="cat">Project</label>
                                                                                                
                                            <select name="categoryID" id="categoryID" required>
												<option></option>
																																																				<option value="273">Aahari Corporate Services Pvt. Ltd</option>
																																																																																												<option value="48">Abhigyan Constructions Pvt Ltd</option>
																																																																																												<option value="295">Accuracy Info Labs Pvt Ltd</option>
																																																																																												<option value="84">Achieve Online Services Pvt Ltd</option>
                                                                                                                                                                                                             </select>
                                    </div>
                                                                                                                                
                                                                                                                                                                                                     <div className="half-container">
                                        <label for="project_contributor">Assign this task to:</label>
                                        <select name="project_contributor" id="project_contributor">
                                            <option selected value="1" id="1">Nobody (info@openoidsoft.com)</option>
                                                                                                                                                                                                             <option  value="21" id="21">Asha Dantuluri (asha@datla.info)</option>
                                                                                                                                                                                                             <option  value="10" id="10">Ashok Reddy Kothinti (ashok@datla.info)</option>
                                                                                                                                                                                                         </select>
                                    </div>
                                                                                                                                                                                                 </div>
								<div className="section halves">
                         
                                    <div className="full-container task-type">    
                                               <label for="tagID">Task Type</label>
                                     
                                               <select name='tagID' id='tagID' className='postform' >
													<option className="level-0" value="192">Accounting&nbsp;&nbsp;(28)</option>
													<option className="level-0" value="217">Admin Works ( DA)&nbsp;&nbsp;(0)</option>
												</select>

									</div>

								</div>
                                    <div className="section thirds priority-and-dates">
                                                                
                                        <div className="third-container priority">
                                            <label>Priority</label>
                                            <label className="radio new-task-priority-low"><input type="radio" name="priority" value="low" id="low"/>Low</label>
                                            <label className="radio new-task-priority-normal"><input type="radio" name="priority" value="normal" id="normal" checked/>Normal</label>
                                            <label className="radio new-task-priority-high"><input type="radio" name="priority" value="high" id="high"/>High</label>
                                            <label className="radio new-task-priority-urgent"><input type="radio" name="priority" value="urgent" id="urgent"/>Urgent</label>
                                        </div>
                                                                
                                        <div className="third-container start-date">
                                            <label>Start date</label>
                                            <input type="text" className="text date" id="startdate" name="startdate" />
                                            <em className="clear-field clear-start-date-field">Clear</em>
                                        </div>
                                                                
                                        <div className="third-container end-date">
                                            <label>End date</label>
                                            <input type="text" className="text date" id="duedate" name="duedate" />
                                            <em className="clear-field clear-end-date-field">Clear</em>
                                        </div>
                                    </div>
                                                
                                    <div className="section halves job-number-and-attachments">
                                                                
                                        <div className="half-container job-number">
                                            <label>Job number</label>
																																																			<span className="job-num-notice">Auto Generated <i className="tip master-tooltip" title="A job number will be automatically assigned when you create this task."></i></span>
                                            <input type="hidden" id="job_number_task" name="job_number_task" value="DA-2017JAN21-T" />
                                    </div>
                                                                                                                                
                                                                                
                                    <div className="half-container upload-attachment">
                                            <label>Attach files</label>
                                            <input type="file" name="tr_multiple_attachments[]"  multiple="multiple" />
                                    </div>
                                                                                                            
                                </div>
                         
                                    <span className="cancel-task">&#215;</span>
                                                
                            </div>
                                {/*<!--/ End Fleft /-->*/}
                                
                                
                                {/*<!--/ Start Fright /-->*/}
                            <div className="fright">
                                <div className="section textarea-right">
                                    <span className="nbm full-width">
										<label for="minfo">Additional information</label>
										<textarea name="minfo" id="minfo" className="text textarea" rows="10" cols="20"></textarea>
                                    </span>
                                                                
                                <div className="submit-button-container">
                                    <input type="submit" name="submit" className="button submit" value="Create Task" />
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