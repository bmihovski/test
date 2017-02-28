import React,{Component} from 'react';
import {
    TabBarIOS,
    Text,
    Alert,
    Vibration,
    StatusBar
} from 'react-native';

import NewsFeed from './NewsFeed';
import Search from './Search';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }

    showBookmarkAlert(){
        Vibration.vibrate();
        Alert.alert(
            'Coming Soon!',
            'We\'re hard at work on this feature',
            [
                {text:'OK',
                onPress:()=>console.log('user pressed OK')}
            ]
        );
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}
            >
                <TabBarIOS.Item
                    badge={4}
                    systemIcon={'featured'}
                selected={this.state.tab == 'newsFeed'}
                onPress={()=>this.setState({tab:'newsFeed'})}>
                    <NewsFeed/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'search'}
                selected={this.state.tab == 'search'}
                onPress={()=>this.setState({tab:'search'})}>
                    <Search/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'bookmarks'}
                selected={this.state.tab=='bookmarks'}
                onPress={()=>this.showBookmarkAlert()}>
                    <Text>Bookmarks</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}