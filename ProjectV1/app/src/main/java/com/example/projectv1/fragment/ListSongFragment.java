package com.example.projectv1.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.databinding.DataBindingUtil;

import com.example.projectv1.R;
import com.example.projectv1.adapter.song.SongAdapter;
import com.example.projectv1.adapter.song.SongListener;
import com.example.projectv1.base.BaseFragment;
import com.example.projectv1.data.SystemData;
import com.example.projectv1.databinding.FragmentListSongsBinding;
import com.example.projectv1.models.Song;

import java.util.ArrayList;

public class ListSongFragment extends BaseFragment implements SongListener {
    private SystemData systemData;
    private ArrayList<Song> data;
    private SongAdapter adapter;
    private FragmentListSongsBinding binding;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_list_songs, container, false);
        systemData = new SystemData((getContext()));
        data = systemData.readData();
        data.size();
        adapter = new SongAdapter(getLayoutInflater());
        adapter.setData(data);
        adapter.setListener(this);

        binding.lvListSongs.setAdapter(adapter);

        return binding.getRoot();
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        getContext();
        getActivity();
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.fragment_list_songs;
    }

    @Override
    public String getTitle() {
        return null;
    }

    @Override
    public void onTtemSongClicked(Song song) {

    }
}
